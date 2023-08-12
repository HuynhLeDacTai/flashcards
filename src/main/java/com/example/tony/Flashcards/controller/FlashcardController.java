package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.CardDTO;
import com.example.tony.Flashcards.dtos.FlashcardDTO;
import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.models.User;
import com.example.tony.Flashcards.services.impl.CardService;
import com.example.tony.Flashcards.services.impl.FlashcardServiceImpl;
import com.example.tony.Flashcards.services.impl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api/flashcards")
@CrossOrigin(maxAge = 3600)
public class FlashcardController {
    @Autowired
    FlashcardServiceImpl flashcardService;
    @Autowired
    UserServiceImpl userService;

    @Autowired
    CardService cardService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/all")
    private ResponseEntity<ResponseObject> getAllTodo(@CurrentSecurityContext(expression = "authentication?.name")
                                                      String username) {

        User user = userService.getUserByUsername(username).orElseThrow();
        List<Flashcard> listFlashcards = flashcardService.getAllFlashcardByUserId(user.getId());
        List<FlashcardDTO> listResult = new ArrayList<>();
        listFlashcards.forEach(item -> {
            int amount = cardService.getAmountOfCardById(item.getId());
            FlashcardDTO result = modelMapper.map(item, FlashcardDTO.class);
            result.setUserName(user.getName());
            result.setAmount(amount);
            listResult.add(result);
        });
        return !listFlashcards.isEmpty()
                ? ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("200", "Query flashcard successfully", listResult))
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("404", "Query failed", ""));
    }

    @GetMapping("/lists/{id}")
    private ResponseEntity<ResponseObject> getDetaiFlashcard(@PathVariable Long id) {
        List<Card> cardList = cardService.getAllByFlashcardId(id);
        Flashcard flashcard = flashcardService.getFlashcardById(id).orElseThrow();
        List<CardDTO> resultList = cardList.stream().map(item -> {
            int amount = cardList.size();
            CardDTO cardDTO = modelMapper.map(item, CardDTO.class);
            cardDTO.setTitle(flashcard.getTitle());
            return cardDTO;
        }).toList();

        return !cardList.isEmpty()
                ? ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("200", "Query card successfully", resultList))
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("404", "Query failed", ""));
    }
}

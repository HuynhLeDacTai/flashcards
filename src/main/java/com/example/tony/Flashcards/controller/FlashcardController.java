package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.CardDTO;
import com.example.tony.Flashcards.dtos.FlashcardDTO;
import com.example.tony.Flashcards.dtos.PageDTO;
import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.models.User;
import com.example.tony.Flashcards.repositories.FlashcardRepository;
import com.example.tony.Flashcards.services.impl.CardServiceImpl;
import com.example.tony.Flashcards.services.impl.FlashcardServiceImpl;
import com.example.tony.Flashcards.services.impl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/flashcards")
@CrossOrigin(maxAge = 3600)
public class FlashcardController {
    @Autowired
    FlashcardServiceImpl flashcardService;

    @Autowired
    FlashcardRepository flashcardRepository;
    @Autowired
    UserServiceImpl userService;

    @Autowired
    CardServiceImpl cardService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/all/{page}")
    private ResponseEntity<ResponseObject> getAllFlashcard(@CurrentSecurityContext(expression = "authentication?.name")
                                                           String username, @PathVariable Integer page) {

        User user = userService.getUserByUsername(username).orElseThrow();
//        List<Flashcard> listFlashcards = flashcardService.getAllFlashcardByUserId(user.getId());
        Page<Flashcard> listPage = flashcardService.getAllFlashcardByUserId(user.getId(), PageRequest.of(page - 1, 9));
        List<FlashcardDTO> listResult = new ArrayList<>();
        listPage.forEach(item -> {
            int amount = cardService.getAmountOfCardById(item.getId());
            FlashcardDTO result = modelMapper.map(item, FlashcardDTO.class);
            result.setUserName(user.getName());
            result.setAmount(amount);
            listResult.add(result);
        });
        PageDTO pageResult = PageDTO.builder()
                .data(listResult)
                .page(page)
                .totalPage(listPage.getTotalPages())
                .totalElements(listPage.getTotalElements())
                .build();
        return !listResult.isEmpty()
                ? ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("200", "Query flashcard successfully", pageResult))
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

    @PostMapping("/add-flashcard")
    private ResponseEntity<ResponseObject> addFlashcard(@RequestBody Flashcard newFlashcard) {
        Flashcard addedFlashcard = flashcardService.addNewFlashcard(newFlashcard);
        FlashcardDTO result = modelMapper.map(addedFlashcard, FlashcardDTO.class);
        result.setAmount(0);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Add successfully", flashcardService.addNewFlashcard(newFlashcard)));
    }

    @PutMapping("/edit/{id}")
    private ResponseEntity<ResponseObject> editFlashcard(@PathVariable Long id, @RequestBody Flashcard newFlashcard) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Delete Flashcard successfully", flashcardService.editFlashcard(id, newFlashcard)));
    }


    @DeleteMapping("/delete/{id}")
    private ResponseEntity<ResponseObject> deleteFlashcard(@PathVariable Long id) {
        flashcardService.deleteFlashcard(id);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Delete Flashcard successfully", ""));
    }
}

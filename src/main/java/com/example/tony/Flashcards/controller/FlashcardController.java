package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.repositories.FlashcardRepository;
import com.example.tony.Flashcards.services.impl.FlashcardServiceImpl;
import com.example.tony.Flashcards.services.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/flashcards")
@CrossOrigin(maxAge = 3600)
public class FlashcardController {
    @Autowired
    FlashcardServiceImpl _flashcardService;
    @Autowired
    UserServiceImpl _userService;

    @GetMapping("/all")
    private ResponseEntity<ResponseObject> getAllTodo(@CurrentSecurityContext(expression = "authentication?.name")
                                                      String username) {
        Long userId = _userService.getIdByUsername(username);
        List<Flashcard> listFlashcards = _flashcardService.getAllFlashcardByUserId(userId);
        return !listFlashcards.isEmpty()
                ? ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("200", "Query todo successfully", listFlashcards))
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject("404", "Query failed", ""));
    }
}

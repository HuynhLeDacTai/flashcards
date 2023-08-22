package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.services.impl.CardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/card")
@CrossOrigin(maxAge = 3600)
public class CardController {
    @Autowired
    CardServiceImpl cardService;

    @PostMapping("/add")
    public ResponseEntity<ResponseObject> addNewFlashcard(@RequestBody Card newCard) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Add new card successfully", cardService.addNewCard(newCard)));
    }

    @PutMapping("/edit/{id}")
    private ResponseEntity<ResponseObject> editCard(@PathVariable Long id, @RequestBody Card newCard) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Edit Card successfully", cardService.editCard(id, newCard)));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCard(@PathVariable Long id) {
        cardService.deleteCard(id);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Delete card successfully", ""));
    }
}

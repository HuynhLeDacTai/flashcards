package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IFlashcardService {
    @Autowired
    public List<Flashcard> getAllFlashcardByUserId(Long id);
}

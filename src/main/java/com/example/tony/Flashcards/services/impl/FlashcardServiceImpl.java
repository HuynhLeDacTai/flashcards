package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.repositories.FlashcardRepository;
import com.example.tony.Flashcards.services.IFlashcardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardServiceImpl implements IFlashcardService {
    @Autowired
    FlashcardRepository _flashcardRepository;


    @Override
    public List<Flashcard> getAllFlashcardByUserId(Long id) {
        return _flashcardRepository.findAllByUserId(id);
    }

}

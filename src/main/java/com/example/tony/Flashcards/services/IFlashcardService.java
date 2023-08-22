package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IFlashcardService {
    @Autowired
    Page<Flashcard> getAllFlashcardByUserId(Long id, Pageable pageable);

    Optional<Flashcard> getFlashcardById(Long id);

    Flashcard addNewFlashcard(Flashcard newFlashcard);

    Flashcard editFlashcard(Long flashcardId, Flashcard newFlashcard);

    void deleteFlashcard(Long id);
}

package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Flashcard;
import com.example.tony.Flashcards.repositories.FlashcardRepository;
import com.example.tony.Flashcards.services.IFlashcardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlashcardServiceImpl implements IFlashcardService {
    @Autowired
    FlashcardRepository _flashcardRepository;


    @Override
    public Page<Flashcard> getAllFlashcardByUserId(Long id, Pageable pageable) {
        return _flashcardRepository.findAllByUserId(id, pageable);
    }

    @Override
    public Optional<Flashcard> getFlashcardById(Long id) {
        return _flashcardRepository.findById(id);
    }

    @Override
    public Flashcard addNewFlashcard(Flashcard newFlashcard) {
        return _flashcardRepository.save(newFlashcard);
    }

    @Override
    public Flashcard editFlashcard(Long flashcardId, Flashcard newFlashcard) {
        Optional<Flashcard> oldFlashcardOptional = _flashcardRepository.findById(flashcardId);
        if (oldFlashcardOptional.isPresent()) {
            Flashcard oldFlashcard = oldFlashcardOptional.get();
            oldFlashcard.setTitle(newFlashcard.getTitle());
            oldFlashcard.setDescription(newFlashcard.getDescription());
            return _flashcardRepository.save(oldFlashcard);
        } else {
            return null;
        }
    }

    @Override
    public void deleteFlashcard(Long id) {
        Optional<Flashcard> flashcard = _flashcardRepository.findById(id);
        flashcard.ifPresent(item -> {
            _flashcardRepository.delete(item);
        });
    }

}

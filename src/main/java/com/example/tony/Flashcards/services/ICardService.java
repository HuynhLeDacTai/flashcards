package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Card;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICardService {

    int getAmountOfCardById(Long id);

    List<Card> getAllByFlashcardId(Long id);
}

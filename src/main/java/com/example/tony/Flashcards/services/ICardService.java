package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.models.Flashcard;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICardService {

    int getAmountOfCardById(Long id);

    List<Card> getAllByFlashcardId(Long id);

    Card addNewCard(Card card);

    Card editCard(Long cardId, Card newCard);

    void deleteCard(Long id);
}

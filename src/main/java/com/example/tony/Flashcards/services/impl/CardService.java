package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.repositories.CardRepository;
import com.example.tony.Flashcards.services.ICardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService implements ICardService {
    @Autowired
    CardRepository cardRepository;

    @Override
    public int getAmountOfCardById(Long id) {
        List<Card> cardList = cardRepository.findAllByFlashcardId(id);
        return cardList.size();
    }

    @Override
    public List<Card> getAllByFlashcardId(Long id) {
        return cardRepository.findAllByFlashcardId(id);
    }
}

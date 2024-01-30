package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.repositories.CardRepository;
import com.example.tony.Flashcards.services.ICardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardServiceImpl implements ICardService {
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

    @Override
    public Card addNewCard(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public Card editCard(Long cardId, Card newCard) {
        Optional<Card> oldCardOptional = cardRepository.findById(cardId);
        if (oldCardOptional.isPresent()) {
            Card oldCard = oldCardOptional.get();
            oldCard.setName(oldCard.getName());
            oldCard.setDefinition(newCard.getDefinition());
            return cardRepository.save(oldCard);
        } else {
            return null;
        }
    }

    @Override
    public void deleteCard(Long id) {
        Optional<Card> card = cardRepository.findById(id);
        card.ifPresent(item -> {
            cardRepository.delete(item);
        });
    }
}

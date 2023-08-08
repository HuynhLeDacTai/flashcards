package com.example.tony.Flashcards.repositories;

import com.example.tony.Flashcards.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
}

package com.example.tony.Flashcards.repositories;

import com.example.tony.Flashcards.models.Flashcard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {

    List<Flashcard> findAllByUserId(Long id);

    Page<Flashcard> findAllByUserId(Long id, Pageable pageable);


}

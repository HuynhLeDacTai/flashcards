package com.example.tony.Flashcards.dtos;

import com.example.tony.Flashcards.models.Flashcard;
import lombok.Data;

@Data

public class CardDTO {

    private Long id;
    private String name;
    private String defination;
    private String title;
}

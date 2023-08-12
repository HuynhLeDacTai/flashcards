package com.example.tony.Flashcards.dtos;

import lombok.Data;

@Data

public class FlashcardDTO {

    private Long id;
    private String title;
    private String description;
    private String userName;
    private int amount;


}

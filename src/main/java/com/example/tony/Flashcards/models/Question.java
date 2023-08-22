package com.example.tony.Flashcards.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "content")
    private String content;

    @Column(name = "choice_1")
    private String choice_1;

    @Column(name = "choice_2")
    private String choice_2;

    @Column(name = "choice_3")
    private String choice_3;

    @Column(name = "choice_4")
    private String choice_4;

    @Column(name = "answer")
    private String answer;
}

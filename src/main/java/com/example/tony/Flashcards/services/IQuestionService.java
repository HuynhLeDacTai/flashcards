package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IQuestionService {

    List<Question> getAll();

    Question add(Question question);

    Question addMultiple(List<Question> questions);
}

package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Question;
import com.example.tony.Flashcards.repositories.QuestionRepository;
import com.example.tony.Flashcards.services.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements IQuestionService {
    @Autowired
    QuestionRepository questionRepository;

    @Override
    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    @Override
    public List<Question> getQuestionsByTestId(Long testId) {
        return questionRepository.getQuestions(testId);
    }

    @Override
    public Question add(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question addMultiple(List<Question> questions) {
        return (Question) questionRepository.saveAll(questions);
    }
}

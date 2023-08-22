package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.Test;
import com.example.tony.Flashcards.repositories.TestRepository;
import com.example.tony.Flashcards.services.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements ITestService {

    @Autowired
    private TestRepository testRepository;

    @Override
    public List<Test> getAll() {
        return testRepository.findAll();
    }
}

package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.Test;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITestService {
    List<Test> getAll();
}

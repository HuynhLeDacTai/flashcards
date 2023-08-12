package com.example.tony.Flashcards.services;

import com.example.tony.Flashcards.models.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface IUserService {
    Long getIdByUsername(String username);

    Optional<User> getUserByUsername(String username);
}

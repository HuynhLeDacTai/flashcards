package com.example.tony.Flashcards.services.impl;

import com.example.tony.Flashcards.models.User;
import com.example.tony.Flashcards.repositories.UserRepository;
import com.example.tony.Flashcards.services.IUserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    UserRepository _userRepository;

    @Override
    public Long getIdByUsername(String username) {
        Optional<User> user = _userRepository.findByEmail(username);
        if (user.isPresent()) {
            return user.get().getId();
        } else {
            throw new EntityNotFoundException("User not found with email: " + username);
        }
    }
}

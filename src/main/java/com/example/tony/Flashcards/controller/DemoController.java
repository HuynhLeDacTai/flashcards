package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.models.Card;
import com.example.tony.Flashcards.models.Token;
import com.example.tony.Flashcards.repositories.CardRepository;
import com.example.tony.Flashcards.repositories.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/demo")
public class DemoController {
    @Autowired
    CardRepository cardRepository;
    @Autowired
    TokenRepository tokenRepository;

    @GetMapping("/hello")
    public List<Token> hello(@CurrentSecurityContext(expression = "authentication?.name")
                             String username) {
        List<Token> list = tokenRepository.findAllValidTokenByUser(53L);
        return list;
    }

}

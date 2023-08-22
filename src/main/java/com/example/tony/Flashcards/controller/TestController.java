package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.services.impl.TestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/test")
@CrossOrigin(maxAge = 3600)
public class TestController {
    @Autowired
    TestServiceImpl testService;

    @GetMapping("/all")
    public ResponseEntity<ResponseObject> getAllTest() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", testService.getAll()));

    }

    @PostMapping("/add-data")
    public ResponseEntity<ResponseObject> addData() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", testService.getAll()));

    }
}

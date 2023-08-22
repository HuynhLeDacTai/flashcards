package com.example.tony.Flashcards.controller;

import com.example.tony.Flashcards.dtos.ResponseObject;
import com.example.tony.Flashcards.models.Question;
import com.example.tony.Flashcards.models.Test;
import com.example.tony.Flashcards.services.impl.QuestionServiceImpl;
import com.example.tony.Flashcards.services.impl.TestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/question")
@CrossOrigin(maxAge = 3600)
public class QuestionController {
    @Autowired
    QuestionServiceImpl questionService;
    @Autowired
    TestServiceImpl testService;

    @GetMapping("/all")
    public ResponseEntity<ResponseObject> getAllQuestion() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", questionService.getAll()));

    }

    @GetMapping("/arrangeData")
    public ResponseEntity<ResponseObject> arrangeData() {
        List<Question> questions = questionService.getAll();
        int count = 0;
        int total = 45852;
        List<Test> tests = testService.getAll();
        for (Test test : tests) {
            int amount = test.getAmountOfQuestion();
            for (int i = total; count < amount; i++) {
                System.out.println("(" + test.getId() + "," + i + "),");
                count++;

            }
            total += count;
            count = 0;
        }

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", testService.getAll()));

    }

    @PostMapping("/add-data")
    public ResponseEntity<ResponseObject> addQuestion(@RequestBody Question question) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", questionService.add(question)));

    }

    @PostMapping("/add-multiple-data")
    public ResponseEntity<ResponseObject> addMulQuestion(@RequestBody List<Question> questions) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("200", "Get data successfully", questionService.addMultiple(questions)));

    }
}

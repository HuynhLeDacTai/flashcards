package com.example.tony.Flashcards.repositories;

import com.example.tony.Flashcards.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query(value = "select * from test_detail td\n" +
            "\tjoin question q\n" +
            "    on q.ID = td.QUESTION_ID\n" +
            "    where td.TEST_ID = :testId", nativeQuery = true)
    List<Question> getQuestions(@Param("testId") Long testID);
}

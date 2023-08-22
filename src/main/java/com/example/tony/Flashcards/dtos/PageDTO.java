package com.example.tony.Flashcards.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PageDTO {
    private Object data;
    private int page;
    private int totalPage;
    private long totalElements;
}

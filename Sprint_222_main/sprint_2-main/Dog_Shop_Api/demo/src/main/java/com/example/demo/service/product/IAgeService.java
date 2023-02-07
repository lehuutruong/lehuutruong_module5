package com.example.demo.service.product;

import com.example.demo.dto.size.IAgeDto;
import com.example.demo.dto.size.AgeDto;
import com.example.demo.model.product.Age;

import java.util.List;

public interface IAgeService {
    List<Age> getAllSize();

    List<IAgeDto> getAllSizeDto(AgeDto ageDto);
}

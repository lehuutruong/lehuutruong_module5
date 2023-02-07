package com.example.demo.service.product.impl;

import com.example.demo.dto.size.IAgeDto;
import com.example.demo.dto.size.AgeDto;
import com.example.demo.model.product.Age;
import com.example.demo.repository.product.IAgeRepository;
import com.example.demo.service.product.IAgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgeService implements IAgeService {
    @Autowired
    private IAgeRepository ageRepository;

    @Override
    public List<Age> getAllSize() {
        return ageRepository.findAll();
    }

    @Override
    public List<IAgeDto> getAllSizeDto(AgeDto ageDto) {
        return ageRepository.getAllAgeDto(ageDto);
    }
}

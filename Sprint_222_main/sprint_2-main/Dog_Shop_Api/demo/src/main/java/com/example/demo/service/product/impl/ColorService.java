package com.example.demo.service.product.impl;

import com.example.demo.dto.color.ColorDto;
import com.example.demo.dto.color.IColorDto;
import com.example.demo.repository.product.IColorRepository;
import com.example.demo.service.product.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorService implements IColorService {
    @Autowired
    private IColorRepository colorRepository;

    @Override
    public List<IColorDto> getColorByProductId(ColorDto colorDto) {
        return colorRepository.getColorByProductId(colorDto);
    }
}

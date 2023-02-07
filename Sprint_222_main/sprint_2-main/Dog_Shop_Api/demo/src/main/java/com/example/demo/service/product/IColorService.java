package com.example.demo.service.product;

import com.example.demo.dto.color.ColorDto;
import com.example.demo.dto.color.IColorDto;
import com.sun.prism.paint.Color;

import java.util.List;

public interface IColorService {
    List<IColorDto> getColorByProductId(ColorDto colorDto);
}

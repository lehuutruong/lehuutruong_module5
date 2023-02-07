package com.example.demo.controller.product;

import com.example.demo.dto.color.ColorDto;
import com.example.demo.dto.color.IColorDto;
import com.example.demo.service.product.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/color")
public class ColorRestController {
    @Autowired
    private IColorService colorService;

    @PostMapping()
    public ResponseEntity<List<IColorDto>> getColorByProductId(@RequestBody ColorDto colorDto) {
        List<IColorDto> iColorDtos = colorService.getColorByProductId(colorDto);
        if (iColorDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(iColorDtos, HttpStatus.OK);
    }
}

package com.example.demo.controller.product;

import com.example.demo.dto.size.IAgeDto;
import com.example.demo.dto.size.AgeDto;
import com.example.demo.model.product.Age;
import com.example.demo.service.product.IAgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/age")
public class AgeRestController {
    @Autowired
    private IAgeService ageService;

    @GetMapping
    public ResponseEntity<List<Age>> getAllSize() {
        List<Age> ageList = ageService.getAllSize();
        if (ageList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ageList, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<List<IAgeDto>> getAllSizeDto(@RequestBody AgeDto ageDto) {
        List<IAgeDto> ageDtos = ageService.getAllSizeDto(ageDto);
        if (ageDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ageDtos, HttpStatus.OK);
    }
}

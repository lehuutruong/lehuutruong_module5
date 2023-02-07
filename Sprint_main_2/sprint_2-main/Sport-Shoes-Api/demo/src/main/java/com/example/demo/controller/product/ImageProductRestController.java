package com.example.demo.controller.product;

import com.example.demo.dto.image.IImageDto;
import com.example.demo.dto.image.ImageDto;
import com.example.demo.service.product.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/img")
public class ImageProductRestController {
    @Autowired
    private IImageService iImageService;

    @PostMapping()
    public ResponseEntity<List<IImageDto>> getImageOfProductDetail(@RequestBody ImageDto imageDto) {
        List<IImageDto> iImageDtos = iImageService.getImageOfProductDetail(imageDto);
        if (iImageDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(iImageDtos, HttpStatus.OK);
    }

}

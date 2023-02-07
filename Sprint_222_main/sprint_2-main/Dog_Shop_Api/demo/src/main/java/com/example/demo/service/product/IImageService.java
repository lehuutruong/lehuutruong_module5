package com.example.demo.service.product;

import com.example.demo.dto.image.IImageDto;
import com.example.demo.dto.image.ImageDto;

import java.util.List;

public interface IImageService {
    List<IImageDto> getImageOfProductDetail(ImageDto imageDto);
}

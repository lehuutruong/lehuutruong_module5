package com.example.demo.service.product.impl;

import com.example.demo.dto.image.IImageDto;
import com.example.demo.dto.image.ImageDto;
import com.example.demo.repository.product.IImageRepository;
import com.example.demo.service.product.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService implements IImageService {
    @Autowired
    private IImageRepository imageRepository;

    @Override
    public List<IImageDto> getImageOfProductDetail(ImageDto imageDto) {
        return imageRepository.getImageOfProductDetail(imageDto);
    }
}

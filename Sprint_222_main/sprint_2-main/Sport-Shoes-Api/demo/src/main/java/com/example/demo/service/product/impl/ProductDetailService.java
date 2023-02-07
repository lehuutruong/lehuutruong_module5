package com.example.demo.service.product.impl;

import com.example.demo.dto.product_detail.ProductDetailDto;
import com.example.demo.model.product.ProductDetail;
import com.example.demo.repository.product.IProductDetailRepository;
import com.example.demo.service.product.IProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductDetailService implements IProductDetailService {
    @Autowired
    private IProductDetailRepository productDetailRepository;

    @Override
    public Optional<ProductDetail> findProductDetailById(Integer productId) {
        return productDetailRepository.findProductDetailById(productId);
    }

    @Override
    public Optional<ProductDetail> existsByProductDetail(ProductDetailDto productDetailDto) {
        return productDetailRepository.existsByProductDetail(productDetailDto);
    }

    @Override
    public Optional<ProductDetail> findProductDetailByDetailId(Integer productDetailId) {
        return productDetailRepository.findById(productDetailId);
    }

    @Override
    public void save(ProductDetail productDetail) {
        productDetailRepository.save(productDetail);
    }


}

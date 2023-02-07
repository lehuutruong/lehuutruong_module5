package com.example.demo.service.product.impl;

import com.example.demo.dto.product.ProductSearchDto;
import com.example.demo.model.product.Product;
import com.example.demo.repository.product.IProductRepository;
import com.example.demo.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<Product> getAllProductList(ProductSearchDto productSearchDto, Pageable pageable) {
        return productRepository.getAllProductList(productSearchDto, pageable);
    }

    @Override
    public Page<Product> getAllProductByBrand(Integer brandId, Pageable pageable) {
        return productRepository.getAllProductByBrand(brandId,pageable);
    }


}

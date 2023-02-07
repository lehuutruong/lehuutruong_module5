package com.example.demo.service.product;

import com.example.demo.dto.product_detail.ProductDetailDto;
import com.example.demo.model.product.ProductDetail;

import java.util.Map;
import java.util.Optional;

public interface IProductDetailService {
    Optional<ProductDetail> findProductDetailById(Integer productId);


    Optional<ProductDetail> existsByProductDetail(ProductDetailDto productDetailDto);

    Optional<ProductDetail> findProductDetailByDetailId(Integer productDetailId);

    void save(ProductDetail productDetail);
}

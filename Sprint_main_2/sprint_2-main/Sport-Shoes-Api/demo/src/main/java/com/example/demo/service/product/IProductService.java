package com.example.demo.service.product;

import com.example.demo.dto.product.ProductSearchDto;
import com.example.demo.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {

    Page<Product> getAllProductList(ProductSearchDto productSearchDto, Pageable pageable);

    Page<Product> getAllProductByBrand(Integer brandId, Pageable pageable);
}

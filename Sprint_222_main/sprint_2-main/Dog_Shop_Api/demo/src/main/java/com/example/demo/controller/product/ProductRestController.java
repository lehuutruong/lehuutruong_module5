package com.example.demo.controller.product;

import com.example.demo.dto.product.ProductListDto;
import com.example.demo.dto.product.ProductSearchDto;
import com.example.demo.model.product.Product;
import com.example.demo.service.product.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/products")
public class ProductRestController {
    @Autowired
    private IProductService productService;


    @PostMapping()
    public ResponseEntity<Page<ProductListDto>> getAllProductList(@RequestBody ProductSearchDto productSearchDto,
                                                                  @PageableDefault(value = 6) Pageable pageable) {
        Page<Product> productPage = productService.getAllProductList(productSearchDto, pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        Page<ProductListDto> productListDtoPage = productPage.map(new Function<Product, ProductListDto>() {
            @Override
            public ProductListDto apply(Product product) {
                ProductListDto productListDto = new ProductListDto();
                product.getProductDetails().forEach(productDetail -> productDetail.getImages().forEach(image ->
                        productListDto.setUrl(image.getUrl())));
                BeanUtils.copyProperties(product, productListDto);
                return productListDto;
            }
        });
        return new ResponseEntity<>(productListDtoPage, HttpStatus.OK);
    }

    @GetMapping("/{brandId}")
    public ResponseEntity<Page<ProductListDto>> getAllProductByBrand(@PathVariable(value = "brandId") Integer brandId,
                                                                     @PageableDefault(value = 4) Pageable pageable) {
        Page<Product> productPage = productService.getAllProductByBrand(brandId,pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Page<ProductListDto> productListDtoPage = productPage.map(new Function<Product, ProductListDto>() {
            @Override
            public ProductListDto apply(Product product) {
                ProductListDto productListDto = new ProductListDto();
                product.getProductDetails().forEach(productDetail -> productDetail.getImages().forEach(image ->
                        productListDto.setUrl(image.getUrl())));
                BeanUtils.copyProperties(product, productListDto);
                return productListDto;
            }
        });
        return new ResponseEntity<>(productListDtoPage, HttpStatus.OK);
    }

}

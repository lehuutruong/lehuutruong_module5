package com.example.demo.controller.product;

import com.example.demo.dto.product_detail.ProductDetailDto;
import com.example.demo.model.product.ProductDetail;
import com.example.demo.service.product.IProductDetailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/product-detail")
public class ProductDetailRestController {
    @Autowired
    private IProductDetailService productDetailService;

    @GetMapping("/{productId}")
    public ResponseEntity<ProductDetailDto> findProductDetailById(@PathVariable(value = "productId") Integer productId) {
        Optional<ProductDetail> productDetailOptional = productDetailService.findProductDetailById(productId);
        ProductDetail productDetail = productDetailOptional.get();
        if (productDetailOptional.isPresent()) {
            ProductDetailDto productDetailDto = new ProductDetailDto();
            BeanUtils.copyProperties(productDetail, productDetailDto);
            return new ResponseEntity<>(productDetailDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping()
    public ResponseEntity<ProductDetail> findProductDetail(@Valid @RequestBody ProductDetailDto productDetailDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        Optional<ProductDetail> productDetailOptional = productDetailService.existsByProductDetail(productDetailDto);
        if (productDetailOptional.isPresent()) {
            return new ResponseEntity<>(productDetailOptional.get(), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}

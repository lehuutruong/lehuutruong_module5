package com.example.demo.controller.order;

import com.example.demo.dto.order.OderDto;
import com.example.demo.dto.product_detail.ProductDetailDto;
import com.example.demo.model.order.Oder;
import com.example.demo.model.product.ProductDetail;
import com.example.demo.model.user.User;
import com.example.demo.service.order.IOderService;
import com.example.demo.service.payment.IPaymentService;
import com.example.demo.service.product.IProductDetailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/oders")
public class OderRestController {
    @Autowired
    private IOderService oderService;
    @Autowired
    private IProductDetailService productDetailService;


    @PostMapping()
    public ResponseEntity<Oder> addNewOder(@Valid @RequestBody OderDto oderDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        oderDto.setUser(new User(oderDto.getUserId()));
        oderDto.setProductDetail(new ProductDetail(oderDto.getProductDetailId()));
        Oder oder = new Oder();
        BeanUtils.copyProperties(oderDto, oder);
        oder.setPaymentStatus(true);
        oder.setOrderTime(String.valueOf(LocalDateTime.now()));
        ProductDetail productDetail = productDetailService.findProductDetailByDetailId(oderDto.getProductDetailId()).get();
        productDetail.setQuantity(productDetail.getQuantity() - oder.getQuantity());
        productDetailService.save(productDetail);
        ProductDetailDto productDetailDto = new ProductDetailDto();
        BeanUtils.copyProperties(productDetail, productDetailDto);
        oderService.addNewOder(oder);
        return new ResponseEntity<>(oder, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Oder>> findOderByUserId(@PathVariable("userId") Integer userId) {
        List<Oder> oderList = oderService.findOderByUserId(userId);
        if (oderList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(oderList, HttpStatus.OK);
    }
}

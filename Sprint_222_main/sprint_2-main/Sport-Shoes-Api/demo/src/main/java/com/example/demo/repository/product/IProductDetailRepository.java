package com.example.demo.repository.product;

import com.example.demo.dto.product_detail.ProductDetailDto;
import com.example.demo.model.product.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface IProductDetailRepository extends JpaRepository<ProductDetail,Integer> {
    @Query(value = "select * from product_detail pd" +
            " where pd.delete_status = 0 and pd.product_id = :productId" +
            " limit 1", nativeQuery = true)
    Optional<ProductDetail> findProductDetailById(Integer productId);

    @Query(value = "select * from product_detail" +
            " where color_id =:#{#productDetailDto.colorId}" +
            " and product_id =:#{#productDetailDto.productId}" +
            " and size_id =:#{#productDetailDto.sizeId}", nativeQuery = true)
    Optional<ProductDetail> existsByProductDetail(@Param("productDetailDto") ProductDetailDto productDetailDto);

}

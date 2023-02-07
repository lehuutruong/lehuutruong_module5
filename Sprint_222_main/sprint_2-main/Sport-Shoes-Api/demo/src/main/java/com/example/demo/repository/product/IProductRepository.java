package com.example.demo.repository.product;

import com.example.demo.dto.product.ProductSearchDto;
import com.example.demo.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * " +
            " from version_sprint_2.product " +
            " where product.delete_status = 1" +
            " and product.brand_id like %:#{#productSearchDto.brandId}%" +
            " and product.discount_id like %:#{#productSearchDto.discountId}%" +
            " and product.name like %:#{#productSearchDto.name}%" +
            " and product.current_price <= :#{#productSearchDto.rangePrice}" +
            " group by product.`name`" +
            " order by product.date_submitted desc", nativeQuery = true)
    Page<Product> getAllProductList(@Param("productSearchDto") ProductSearchDto productSearchDto, Pageable pageable);

    @Query(value = "select * from product" +
            " where delete_status = 1 and brand_id =:brandId", nativeQuery = true)
    Page<Product> getAllProductByBrand(@Param("brandId") Integer brandId, Pageable pageable);
}

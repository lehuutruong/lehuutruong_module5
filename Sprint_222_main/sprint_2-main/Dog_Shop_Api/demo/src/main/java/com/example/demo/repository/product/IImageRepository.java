package com.example.demo.repository.product;

import com.example.demo.dto.image.IImageDto;
import com.example.demo.dto.image.ImageDto;
import com.example.demo.model.product.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface IImageRepository extends JpaRepository<Image, Integer> {

    @Query(value = "select i.url from product p" +
            " join product_detail pd on pd.product_id = p.id" +
            " join image i on i.product_detail_id =pd.id" +
            " where p.delete_status = 0 and p.id =:#{#imageDto.productId} " +
            " and pd.color_id =:#{#imageDto.colorId}" +
            " group by i.url limit 4", nativeQuery = true)
    List<IImageDto> getImageOfProductDetail(@Param("imageDto") ImageDto imageDto);
}

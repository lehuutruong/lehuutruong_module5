package com.example.demo.repository.product;

import com.example.demo.dto.color.ColorDto;
import com.example.demo.dto.color.IColorDto;
import com.example.demo.model.product.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface IColorRepository extends JpaRepository<Color, Integer> {
    @Query(value = "select c.id id, c.name `name` from product_detail pd" +
            " join color c on pd.color_id = c.id" +
            " join product p on p.id = pd.product_id" +
            " where p.id =:#{#colorDto.productId} and pd.size_id =:#{#colorDto.sizeId}", nativeQuery = true)
    List<IColorDto> getColorByProductId(@Param("colorDto") ColorDto colorDto);
}

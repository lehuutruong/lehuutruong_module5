package com.example.demo.repository.product;

import com.example.demo.dto.size.IAgeDto;
import com.example.demo.dto.size.AgeDto;
import com.example.demo.model.product.Age;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface IAgeRepository extends JpaRepository<Age, Integer> {
    @Query(value = "select s.id id, s.size size from product_detail pd" +
            " join size s on pd.size_id = s.id" +
            " join product p on p.id =pd.product_id" +
            " where p.id =:#{#ageDto.productId} and pd.color_id =:#{#ageDto.colorId}", nativeQuery = true)
    List<IAgeDto> getAllAgeDto(@Param("ageDto") AgeDto ageDto);
}

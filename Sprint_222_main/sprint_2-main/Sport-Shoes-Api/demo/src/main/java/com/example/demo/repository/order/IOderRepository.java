package com.example.demo.repository.order;

import com.example.demo.model.order.Oder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface IOderRepository extends JpaRepository<Oder, Integer> {
    @Query(value = "SELECT *" +
            " FROM oder o" +
            " WHERE o.user_id =:userId" +
            " AND o.payment_status = 1" +
            " AND o.delete_status = 0", nativeQuery = true)
    List<Oder> findOderByUserId(@Param("userId") Integer userId);
}

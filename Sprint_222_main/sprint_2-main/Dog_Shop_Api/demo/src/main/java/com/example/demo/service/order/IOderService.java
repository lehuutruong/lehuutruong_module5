package com.example.demo.service.order;

import com.example.demo.model.order.Oder;

import java.util.List;

public interface IOderService {
    void addNewOder(Oder oder);

    List<Oder> findOderByUserId(Integer userId);
}

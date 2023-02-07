package com.example.demo.service.order.impl;

import com.example.demo.model.order.Oder;
import com.example.demo.repository.order.IOderRepository;
import com.example.demo.service.order.IOderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OderService implements IOderService {
    @Autowired
    private IOderRepository oderRepository;

    @Override
    public void addNewOder(Oder oder) {
        oderRepository.save(oder);
    }

    @Override
    public List<Oder> findOderByUserId(Integer userId) {
        return oderRepository.findOderByUserId(userId);
    }
}

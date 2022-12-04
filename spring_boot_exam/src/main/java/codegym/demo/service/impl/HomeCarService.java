package codegym.demo.service.impl;

import codegym.demo.model.HomeCar;
import codegym.demo.repository.IHomeCarRepository;
import codegym.demo.service.IHomeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HomeCarService implements IHomeCarService {
    @Autowired
    private IHomeCarRepository homeCarRepository;
    @Override
    public List<HomeCar> findAll() {
        return homeCarRepository.findAll();
    }
}

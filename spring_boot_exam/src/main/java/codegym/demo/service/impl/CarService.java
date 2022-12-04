package codegym.demo.service.impl;

import codegym.demo.model.Car;
import codegym.demo.repository.ICarRepository;
import codegym.demo.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository carRepository;

    @Override
    public List<Car> findAll() {
        return carRepository.findCarAll();
    }

    @Override
    public Optional<Car> findById(Integer id) {
        return carRepository.findById(id);
    }

    @Override
    public void save(Car car) {
        carRepository.save(car);
    }

    @Override
    public List<Car> search(String start, String end, String startDay, String endDay) {
        return carRepository.search(start,end,startDay,endDay);
    }

    @Override
    public Optional<Car> findCarById(int id) {
        return carRepository.findCarById(id);
    }
}

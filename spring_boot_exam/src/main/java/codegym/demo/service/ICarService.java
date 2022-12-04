package codegym.demo.service;

import codegym.demo.model.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {
    List<Car> findAll();

    Optional<Car> findById(Integer id);

    void save(Car ticket);

    List<Car> search(String start, String end, String startDay, String endDay);

    Optional<Car> findCarById(int id);
}

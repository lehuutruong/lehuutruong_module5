package codegym.demo.repository;

import codegym.demo.model.HomeCar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IHomeCarRepository extends JpaRepository<HomeCar,Integer> {
}

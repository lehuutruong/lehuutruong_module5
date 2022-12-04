package codegym.demo.repository;

import codegym.demo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ICarRepository extends JpaRepository<Car,Integer> {
    @Query(value = "select * from car t where t.status = 1", nativeQuery = true)
    List<Car> findCarAll();

    @Query(value = "select * " +
            "from car t " +
            "where t.status = 1 " +
            "  and t.pointStart like %:start% " +
            "  and t.pointEnd like %:end% " +
            "  and DATE(t.start_date) BETWEEN date(:startDay) AND date(:endDay)",
            nativeQuery = true)
    List<Car> search(@Param("start") String start,
                        @Param("end") String end,
                        @Param("startDay") String startDay,
                        @Param("endDay") String endDay);

    @Query(value = "select * \n" +
            "from car t \n" +
            "where t.id = :id " +
            "and t.status = false",
            nativeQuery = true)
    Optional<Car> findCarById(@Param("id") int id);
}

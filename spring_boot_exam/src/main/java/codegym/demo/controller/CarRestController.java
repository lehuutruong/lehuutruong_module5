package codegym.demo.controller;

import codegym.demo.dto.CarDto;
import codegym.demo.model.Car;
import codegym.demo.service.ICarService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("/http://localhost:4200")
@RestController
@RequestMapping("http://localhost:3000/home")
public class CarRestController {
    @Autowired
    private ICarService carService;
    @GetMapping("")
    public ResponseEntity<List<CarDto>> findAllCar() {
        List<Car> carList = carService.findAll();
        List<CarDto> carDtoList = new ArrayList<>();
        carList.forEach(ticket -> {
            CarDto carDto = new CarDto();
            BeanUtils.copyProperties(carList, carDto);
            carDtoList.add(carDto);
        });
        return new ResponseEntity<>(carDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findById(@PathVariable() int id) {
        Optional<Car> carOptional = carService.findById(id);
        if(!carOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carOptional.get(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CarDto> updateTicket(@PathVariable int id, @RequestBody CarDto carDto) {
        Optional<Car> carOptional = carService.findCarById(id);
        if(carOptional.isPresent()) {
            Car car = new Car();
            BeanUtils.copyProperties(carDto, car);
            carService.save(car);
            return new ResponseEntity<>(carDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("")
    public ResponseEntity<Car> createTicket(@RequestBody Car car) {
        carService.save(car);
        return new ResponseEntity<>(car, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable int id) {
        Optional<Car> carOptional = carService.findById(id);
        if(carOptional.isPresent()) {
            Car car = carOptional.get();
            car.setStatus(0);
            carService.save(car);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Car>> search(@RequestParam(required = false, defaultValue = "") String start,
                                               @RequestParam(required = false, defaultValue = "") String end,
                                               @RequestParam(required = false, defaultValue = "") String startDay,
                                               @RequestParam(required = false, defaultValue = "") String endDay) {
        List<Car> carList = carService.search(start, end, startDay, endDay);
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }
}

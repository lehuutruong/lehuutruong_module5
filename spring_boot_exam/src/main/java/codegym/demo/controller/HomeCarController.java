package codegym.demo.controller;

import codegym.demo.model.HomeCar;
import codegym.demo.service.IHomeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/home/v1")
public class HomeCarController {
    @Autowired
    private IHomeCarService homeCarService;

    @GetMapping("")
    public ResponseEntity<List<HomeCar>> findAllGarage() {
        List<HomeCar> homeCarList = homeCarService.findAll();
        return  new ResponseEntity<>(homeCarList, HttpStatus.OK);
    }
}

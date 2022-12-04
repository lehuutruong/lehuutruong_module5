package codegym.demo.model;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Double price;
    private String pointStart;
    private String pointEnd;
    private String startDate;
    private String timeDate;
    private int many;
    @ManyToOne
    @JoinColumn(name = "home_id", referencedColumnName = "id")
    private HomeCar homeCar;
    private int status;

    public Car() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPointStart() {
        return pointStart;
    }

    public void setPointStart(String pointStart) {
        this.pointStart = pointStart;
    }

    public String getPointEnd() {
        return pointEnd;
    }

    public void setPointEnd(String pointEnd) {
        this.pointEnd = pointEnd;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public int getMany() {
        return many;
    }

    public void setMany(int many) {
        this.many = many;
    }

    public HomeCar getHomeCar() {
        return homeCar;
    }

    public void setHomeCar(HomeCar homeCar) {
        this.homeCar = homeCar;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}

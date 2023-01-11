package vn.sprint_2.model.product;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import vn.sprint_2.model.oder.ProductOderDetail;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String color;
    private String age;
    private Double price;
    private Integer quantity;
    private String avatar;

    @JsonBackReference
    @OneToMany(mappedBy = "product")
    private Set<ProductOderDetail> productOderDetailSet;

    @ManyToOne
    @JoinColumn(name = "country_id", referencedColumnName = "id")
    @JsonManagedReference
    private Country country;


    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @JsonManagedReference
    private Category category;


    @ManyToOne
    @JoinColumn(name = "img_url_id", referencedColumnName = "id")
    @JsonManagedReference
    private ImgUrlProduct imgUrlProduct;

    public Product() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Set<ProductOderDetail> getProductOderDetailSet() {
        return productOderDetailSet;
    }

    public void setProductOderDetailSet(Set<ProductOderDetail> productOderDetailSet) {
        this.productOderDetailSet = productOderDetailSet;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public ImgUrlProduct getImgUrlProduct() {
        return imgUrlProduct;
    }

    public void setImgUrlProduct(ImgUrlProduct imgUrlProduct) {
        this.imgUrlProduct = imgUrlProduct;
    }
}

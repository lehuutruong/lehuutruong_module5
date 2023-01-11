package vn.sprint_2.model.oder;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import vn.sprint_2.model.product.Product;

import javax.persistence.*;

@Entity
public class ProductOderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
    
        private Integer quantity;
    
        @Column(columnDefinition = "boolean default true")
        private Boolean deleteStatus;
    
        @ManyToOne
        @JoinColumn(name = "product_oder_id", referencedColumnName = "id")
        @JsonManagedReference
        private ProductOder productOder;
    
        @ManyToOne
        @JoinColumn(name = "product_id", referencedColumnName = "id")
        @JsonManagedReference
        private Product product;

    public ProductOderDetail() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getDeleteStatus() {
        return deleteStatus;
    }

    public void setDeleteStatus(Boolean deleteStatus) {
        this.deleteStatus = deleteStatus;
    }

    public ProductOder getProductOder() {
        return productOder;
    }

    public void setProductOder(ProductOder productOder) {
        this.productOder = productOder;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}

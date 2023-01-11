package vn.sprint_2.model.oder;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import vn.sprint_2.model.users.User;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ProductOder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String oderDate;

    @Column(columnDefinition = "boolean default true")
    private Boolean deleteStatus;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonManagedReference
    private User user;

    @JsonBackReference
    @OneToMany(mappedBy = "productOder")
    private Set<ProductOderDetail> productOderDetailSet;

    public ProductOder() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOderDate() {
        return oderDate;
    }

    public void setOderDate(String oderDate) {
        this.oderDate = oderDate;
    }

    public Boolean getDeleteStatus() {
        return deleteStatus;
    }

    public void setDeleteStatus(Boolean deleteStatus) {
        this.deleteStatus = deleteStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<ProductOderDetail> getProductOderDetailSet() {
        return productOderDetailSet;
    }

    public void setProductOderDetailSet(Set<ProductOderDetail> productOderDetailSet) {
        this.productOderDetailSet = productOderDetailSet;
    }

}

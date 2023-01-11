package vn.sprint_2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.sprint_2.model.product.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
}

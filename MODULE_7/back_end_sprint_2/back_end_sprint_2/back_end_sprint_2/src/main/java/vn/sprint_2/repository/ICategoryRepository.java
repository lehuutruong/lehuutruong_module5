package vn.sprint_2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.sprint_2.model.product.Category;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}

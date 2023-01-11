package vn.sprint_2.service.product.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint_2.model.product.Product;
import vn.sprint_2.repository.IProductRepository;
import vn.sprint_2.service.product.IProductService;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> listProduct() {
        return productRepository.findAll();
    }
}

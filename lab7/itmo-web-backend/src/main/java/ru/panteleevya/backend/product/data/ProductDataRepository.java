package ru.panteleevya.backend.product.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductDataRepository extends MongoRepository<ProductDataDocument, String> {
    Optional<ProductDataDocument> findByProductId(String productId);
    List<ProductDataDocument> findAllByTag(String tag);
}

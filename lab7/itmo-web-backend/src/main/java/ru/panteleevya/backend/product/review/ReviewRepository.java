package ru.panteleevya.backend.product.review;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<ReviewDocument, String> {
    List<ReviewDocument> findAllByProductId(String productId);
}

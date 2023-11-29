package ru.panteleevya.backend.product.review;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDocument {
    @Id
    private String id;
    private String productId;
    private String timestamp;
    private String username;
    private String text;
    private Integer rating;
}

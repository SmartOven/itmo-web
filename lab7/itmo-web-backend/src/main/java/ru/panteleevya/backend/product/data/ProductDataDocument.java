package ru.panteleevya.backend.product.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "productData")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDataDocument {
    @Id
    private String id;
    private String productId;
    private ImageData image;
    private String price;
    private String fullName;
    private String tag;
}

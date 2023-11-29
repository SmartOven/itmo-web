package ru.panteleevya.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.panteleevya.backend.product.data.ProductDataDocument;
import ru.panteleevya.backend.product.data.ProductDataDto;
import ru.panteleevya.backend.product.data.ProductDataRepository;
import ru.panteleevya.backend.settings.SettingsRepository;
import ru.panteleevya.backend.settings.SettingsService;

import java.util.List;

@RestController
@RequestMapping("/api/product/data")
public class ProductDataController extends LaggingController {
    private final ProductDataRepository repository;
    private final SettingsService settingsService;

    public ProductDataController(
            @Autowired ProductDataRepository repository,
            @Autowired SettingsService settingsService
    ) {
        this.repository = repository;
        this.settingsService = settingsService;
    }

    /**
     * Используется на фронте
     */
    @GetMapping("/find")
    public ResponseEntity<ProductDataDocument> find(@RequestParam String productId) {
        ResponseEntity<ProductDataDocument> response = repository.findByProductId(productId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
        return lagBeforeReturn(response, settingsService);
    }

    @GetMapping("/findAllProductIds")
    public ResponseEntity<List<String>> findAllProductIds() {
        List<String> productIdList = repository.findAll()
                .stream()
                .map(ProductDataDocument::getProductId)
                .toList();
        return ResponseEntity.ok(productIdList);
    }

    /**
     * Используется на фронте
     */
    @GetMapping("/findAllByTag")
    public ResponseEntity<List<ProductDataDocument>> findAllByTag(@RequestParam String tag) {
        ResponseEntity<List<ProductDataDocument>> response = ResponseEntity.ok(repository.findAllByTag(tag));
        return lagBeforeReturn(response, settingsService);
    }

    @PostMapping("/create")
    public ResponseEntity<ProductDataDocument> create(@RequestBody ProductDataDto productDataDto) {
        ProductDataDocument productDataDocument = new ProductDataDocument(
                null,
                productDataDto.productId(),
                productDataDto.image(),
                productDataDto.price(),
                productDataDto.fullName(),
                productDataDto.tag()
        );
        return ResponseEntity.ok(repository.save(productDataDocument));
    }

    @PostMapping("/createAll")
    public ResponseEntity<List<ProductDataDocument>> createAll(@RequestBody List<ProductDataDto> productDataDtoList) {
        List<ProductDataDocument> productDataDocuments = productDataDtoList.stream()
                .map(productDataDto -> new ProductDataDocument(
                        null,
                        productDataDto.productId(),
                        productDataDto.image(),
                        productDataDto.price(),
                        productDataDto.fullName(),
                        productDataDto.tag()
                ))
                .map(repository::save)
                .toList();
        return ResponseEntity.ok(productDataDocuments);
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<?> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}

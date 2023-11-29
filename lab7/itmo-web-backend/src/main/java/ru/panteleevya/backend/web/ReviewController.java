package ru.panteleevya.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.panteleevya.backend.product.data.ProductDataDocument;
import ru.panteleevya.backend.product.data.ProductDataDto;
import ru.panteleevya.backend.product.review.ReviewDocument;
import ru.panteleevya.backend.product.review.ReviewDto;
import ru.panteleevya.backend.product.review.ReviewRepository;
import ru.panteleevya.backend.settings.SettingsRepository;
import ru.panteleevya.backend.settings.SettingsService;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api/product/review")
public class ReviewController extends LaggingController {
    private final ReviewRepository repository;
    private final SettingsService settingsService;

    public ReviewController(
            @Autowired ReviewRepository repository,
            @Autowired SettingsService settingsService
    ) {
        this.repository = repository;
        this.settingsService = settingsService;
    }

    /**
     * Используется на фронте
     */
    @GetMapping("/findAllByProductId")
    public ResponseEntity<List<ReviewDocument>> findAllByProductId(@RequestParam String productId) {
        List<ReviewDocument> sortedReviewDocuments = repository.findAllByProductId(productId)
                .stream()
                .sorted(Comparator.comparing(ReviewDocument::getTimestamp))
                .toList();
        ResponseEntity<List<ReviewDocument>> response = ResponseEntity.ok(sortedReviewDocuments);
        return lagBeforeReturn(response, settingsService);
    }

    @PostMapping("/create")
    public ResponseEntity<ReviewDocument> create(@RequestBody ReviewDto reviewDto) {
        ReviewDocument reviewDocument = new ReviewDocument(
                null,
                reviewDto.productId(),
                reviewDto.timestamp(),
                reviewDto.username(),
                reviewDto.text(),
                reviewDto.rating()
        );
        return ResponseEntity.ok(repository.save(reviewDocument));
    }

    @PostMapping("/createAll")
    public ResponseEntity<List<ReviewDocument>> createAll(@RequestBody List<ReviewDto> reviewDtoList) {
        List<ReviewDocument> reviewDocuments = reviewDtoList.stream()
                .map(reviewDto -> new ReviewDocument(
                        null,
                        reviewDto.productId(),
                        reviewDto.timestamp(),
                        reviewDto.username(),
                        reviewDto.text(),
                        reviewDto.rating()
                ))
                .map(repository::save)
                .toList();
        return ResponseEntity.ok(reviewDocuments);
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<?> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}

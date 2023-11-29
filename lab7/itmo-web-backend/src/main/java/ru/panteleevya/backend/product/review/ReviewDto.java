package ru.panteleevya.backend.product.review;

import lombok.NonNull;

import java.time.LocalDateTime;

public record ReviewDto(
        @NonNull String productId,
        @NonNull String timestamp,
        @NonNull String username,
        @NonNull String text,
        @NonNull Integer rating
) {
}

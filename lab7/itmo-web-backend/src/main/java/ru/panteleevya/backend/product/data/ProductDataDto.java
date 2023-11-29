package ru.panteleevya.backend.product.data;

import lombok.NonNull;

public record ProductDataDto(
        @NonNull String productId,
        @NonNull ImageData image,
        @NonNull String price,
        @NonNull String fullName,
        @NonNull String tag
) {
}

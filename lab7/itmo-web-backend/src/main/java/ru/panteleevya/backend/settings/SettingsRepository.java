package ru.panteleevya.backend.settings;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingsRepository extends MongoRepository<SettingsDocument, String> {
}

package ru.panteleevya.backend.settings;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SettingsService {
    private final SettingsRepository settingsRepository;

    @Getter
    private final SettingsDocument currentSettings;

    public SettingsService(@Autowired SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
        this.currentSettings = settingsRepository.findAll()
                .stream()
                .findAny()
                .orElseGet(() -> new SettingsDocument(null, 0));
    }

    public SettingsDocument updateLaggingTime(int laggingMillis) {
        currentSettings.setLaggingMillis(laggingMillis);
        return settingsRepository.save(currentSettings);
    }
}

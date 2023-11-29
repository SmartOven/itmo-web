package ru.panteleevya.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.panteleevya.backend.settings.SettingsService;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {
    private final SettingsService settingsService;

    public SettingsController(@Autowired SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @PatchMapping("/laggingMillis")
    public ResponseEntity<?> setLaggingMillis(@RequestParam int laggingMillis) {
        return ResponseEntity.ok(settingsService.updateLaggingTime(laggingMillis));
    }
}

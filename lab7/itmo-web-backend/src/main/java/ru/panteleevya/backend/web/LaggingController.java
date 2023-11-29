package ru.panteleevya.backend.web;

import ru.panteleevya.backend.settings.SettingsService;

public abstract class LaggingController {
    protected <T> T lagBeforeReturn(T response, SettingsService settingsService) {
        try {
            Thread.sleep(settingsService.getCurrentSettings().getLaggingMillis());
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return response;
    }
}

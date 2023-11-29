package ru.panteleevya.backend.settings;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "settings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SettingsDocument {
    @Id
    private String id;
    private int laggingMillis;
}

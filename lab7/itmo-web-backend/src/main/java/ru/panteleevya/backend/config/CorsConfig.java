package ru.panteleevya.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Установите домен, с которого разрешены запросы
        config.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:5174", "http://localhost:5175"));

        // Установите разрешенные HTTP методы (например, GET, POST, PUT, DELETE)
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));

        // Установите разрешенные заголовки, если это необходимо
        config.setAllowedHeaders(List.of("Content-Type"));

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
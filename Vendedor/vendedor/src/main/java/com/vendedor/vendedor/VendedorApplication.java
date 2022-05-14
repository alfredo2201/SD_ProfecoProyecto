package com.vendedor.vendedor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages = {
	"com.vendedor.controllers",
	"com.vendedor.models",
	"com.vendedor.services",
	"com.vendedor.repository"
})
public class VendedorApplication {

	public static void main(String[] args) {
		SpringApplication.run(VendedorApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedOrigins("http://localhost")
				.allowedMethods("*");
			}
		};
	}

}

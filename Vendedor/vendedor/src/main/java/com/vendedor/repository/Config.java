package com.vendedor.repository;

import com.vendedor.models.Vendedor;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackageClasses = Vendedor.class)
@EnableJpaRepositories(basePackageClasses = IVendedorRepository.class)
public class Config {
    
}

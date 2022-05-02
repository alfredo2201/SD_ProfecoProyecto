package com.producto.repository;
import com.producto.models.Producto;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackageClasses = Producto.class)
@EnableJpaRepositories(basePackageClasses = IProductoRepository.class)
public class Config {
    
}

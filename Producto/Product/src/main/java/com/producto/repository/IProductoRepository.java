package com.producto.repository;

import java.util.List;

import com.producto.models.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Integer>{
    public List<Producto>findByNombre(String nombre);
}

package com.producto.services;
import java.util.List;
import java.util.Objects;

import com.producto.models.Producto;
import com.producto.repository.IProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ProductoService {
    
    @Autowired
    IProductoRepository productoRepository;

    public boolean agregarProducto(Producto producto) {
        try {
            productoRepository.save(producto);
            return true;
        } catch(Exception e) {
            return false;
        }
    }

    public boolean eliminar(int id) {
        try {
            productoRepository.deleteById(id);
            return true;
        } catch(Exception e) {
            return false;
        }
    }

    public boolean actualizarProducto(Producto producto, int id) {
        try {
            Producto prod = productoRepository.findById(id).get();
            if (Objects.nonNull(producto.getNombre()) && !"".equalsIgnoreCase(producto.getNombre())) {
                prod.setNombre(producto.getNombre());
            }

            if (Objects.nonNull(producto.getDescripcion()) && !"".equalsIgnoreCase(producto.getDescripcion())) {
                prod.setDescripcion(producto.getDescripcion());
            }

            if (Objects.nonNull(producto.getPrecio()) && producto.getPrecio() != 0.0) {
                prod.setPrecio(producto.getPrecio());
            }

            if (Objects.nonNull(producto.getImagen())) {
                prod.setImagen(producto.getImagen());
            }
            productoRepository.save(prod);
            return true;
        } catch(Exception e) {
            return false;
        }
    }

    public List<Producto> obtenerProductos() {
        try {
            return productoRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    public Producto obtenProductoById(int id) {
        try {
            return productoRepository.findById(id).get();
        } catch (Exception e) {
            return null;
        }
    }

    public List<Producto> obtenProductoByNombre(String nombre) {
        return productoRepository.findByNombre(nombre);
    }
    
}

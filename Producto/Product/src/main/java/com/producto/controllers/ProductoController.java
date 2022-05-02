package com.producto.controllers;

import java.util.List;

import com.producto.models.Producto;
import com.producto.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/products")
public class ProductoController {
    @Autowired 
    ProductoService productoService;

    @PostMapping("/saveProduct")
    public ResponseEntity<?> createProduct(@RequestBody Producto producto) {
        if ((producto.getNombre() != null) && (producto.getDescripcion() != null) && (producto.getPrecio() != 0.0)
         //&& (producto.getImage() != null)
         ) {
            if(productoService.agregarProducto(producto)) {
                return new ResponseEntity<>("ok", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public String deleteProduct(@PathVariable("id") int id) {
        boolean ok = productoService.eliminar(id);
        if (ok) {
            return "Se eliminó el producto con el id: " + id;
        }
        else {
            return "No se pudo eliminar el producto con el id: " + id;
        }
    }

    @PutMapping("/updateProduct/{id}")
    public String updateProduct(@RequestBody Producto producto, @PathVariable("id") int id) {
        boolean ok = productoService.actualizarProducto(producto, id);
        if (ok) {
            return "Se actualizó el producto con el id: " + id;
        }
        else {
            return "No se pudo actualizar el producto con el id: " + id;
        }
    }

    @GetMapping("/allProducts")
    public List<Producto> allProducts() {
        return productoService.obtenerProductos();
    }

    @GetMapping("/getProduct/{nombre}")
    public List<Producto> getProducto(@PathVariable("nombre") String nombre) {
        System.out.println(nombre);
        return productoService.obtenProductoByNombre(nombre);
    }
}

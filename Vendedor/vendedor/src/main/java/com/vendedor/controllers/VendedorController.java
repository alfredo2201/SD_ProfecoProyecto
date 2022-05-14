package com.vendedor.controllers;

import java.util.List;

import com.vendedor.models.Vendedor;
import com.vendedor.services.VendedorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sellers")
public class VendedorController {
    @Autowired 
    VendedorService vendedorService;

    @GetMapping("/allSellers")
    public List<Vendedor> allProducts() {
        return vendedorService.obtenerVendedores();
    }

    @GetMapping("/getVendedorById/{id}")
    public Vendedor getProductoById(@PathVariable("id") int id) {
        return vendedorService.obtenVendedorById(id);
    }
}
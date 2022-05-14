package com.vendedor.services;
import java.util.List;
import com.vendedor.models.Vendedor;
import com.vendedor.repository.IVendedorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class VendedorService {
    @Autowired
    IVendedorRepository vendedorRepository;

    public List<Vendedor> obtenerVendedores() {
        try {
            return vendedorRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    public Vendedor obtenVendedorById(int id) {
        try {
            return vendedorRepository.findById(id).get();
        } catch (Exception e) {
            return null;
        }
    }
}

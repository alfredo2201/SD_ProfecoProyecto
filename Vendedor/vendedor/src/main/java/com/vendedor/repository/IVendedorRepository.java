package com.vendedor.repository;

import org.springframework.stereotype.Repository;

import com.vendedor.models.Vendedor;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IVendedorRepository extends JpaRepository<Vendedor,Integer>  {
    
}

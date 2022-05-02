package com.producto.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="producto")
public class Producto {
    @Id
    private int id;
    @Column(name = "nombre", length = 30)
    private String nombre;
    @Column(name = "descripcion", length = 500)
    private String descripcion;
    @Column(name = "precio")
    private float precio;
    @Column(name = "imagen", columnDefinition = "MEDIUMBLOB")
    private String imagen;
    @Column(name = "puntuacion")
    private float puntuacion;
    @Column(name = "vendedor", length = 30)
    private String vendedor;

    public Producto() {
    }
    
    public Producto(int id, String nombre, String descripcion, float precio, String imagen, float puntuacion,
            String vendedor) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
        this.vendedor = vendedor;
    }

    public Producto(String nombre, String descripcion, float precio, String imagen, float puntuacion, String vendedor) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
        this.vendedor = vendedor;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public float getPrecio() {
        return precio;
    }
    public void setPrecio(float precio) {
        this.precio = precio;
    }
    
    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public float getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(float puntuacion) {
        this.puntuacion = puntuacion;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    @Override
    public String toString() {
        return "Producto [descripcion=" + descripcion + ", id=" + id + ", imagen=" + imagen + ", nombre=" + nombre
                + ", precio=" + precio + ", puntuacion=" + puntuacion + ", vendedor=" + vendedor + "]";
    }
    
    
}

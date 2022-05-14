package com.vendedor.models;

import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Table(name="vendedor")
public class Vendedor {
    @Id
    private int id;
    @Column(name = "nombre", length = 30)
    private String nombre;
    @Column(name = "imagen", columnDefinition = "MEDIUMBLOB")
    private String imagen;
    @Column(name = "puntuacion")
    private float puntuacion;

    public Vendedor() {
    }
    public Vendedor(int id, String nombre, String imagen, float puntuacion) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
    }
    public Vendedor(String nombre, String imagen, float puntuacion) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
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
    @Override
    public String toString() {
        return "Vendedor [id=" + id + ", imagen=" + imagen + ", nombre=" + nombre + ", puntuacion=" + puntuacion + "]";
    }
    
}

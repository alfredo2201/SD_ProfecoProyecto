package com.reportes.models;
public class Reporte {

    private int id;
    private String titulo;
    private String descripcion;
    private String vendedor;

    public Reporte(int id, String titulo, String descripcion, String vendedor) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.vendedor = vendedor;
    }

    public Reporte (String titulo, String descripcion, String vendedor) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.vendedor = vendedor;
    }

    public Reporte(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    @Override
    public String toString() {
        return "Reporte [descripcion=" + descripcion + ", id=" + id + ", titulo=" + titulo + ", vendedor=" + vendedor
                + "]";
    }

}


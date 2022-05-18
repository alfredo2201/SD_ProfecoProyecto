package com.reportes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reportes.models.Reporte;
import com.reportes.services.ReporteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/reportes")
public class ReporteController {
    @Autowired
    ReporteService reporteService;

    @PostMapping("/saveReport")
    public ResponseEntity<String> createReport(@RequestBody Reporte report){
        if((report.getTitulo()!=null) && (report.getDescripcion() != null) && (report.getVendedor()!=null)){
            if(reporteService.agregarReporte(report)){
                return new ResponseEntity<String>("ok", HttpStatus.OK);
            }
        }
        return new ResponseEntity<String>("error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

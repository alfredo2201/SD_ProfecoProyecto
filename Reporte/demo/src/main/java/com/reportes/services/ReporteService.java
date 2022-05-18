package com.reportes.services;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;

import com.reportes.models.Reporte;

import org.springframework.stereotype.Service;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;

@Service
public class ReporteService {

    static String ftp = "192.168.100.4";
    static String user = "user";
    static String password = "user";
    static FTPClient client= new FTPClient();

    /**
     * 
     * public static void main(String[]args){
        Reporte r = new Reporte("reporte pa calar el txt", "YEAH", "aynose");
        boolean f = agregarReporte(r);
        System.out.println(f);
    }
     */
    

    public boolean agregarReporte(Reporte reporte){
        try{
            client.connect(ftp);
            boolean login = client.login(user, password);
            System.out.println(login);
            client.setFileType(FTP.BINARY_FILE_TYPE, FTP.BINARY_FILE_TYPE);
            client.setFileTransferMode(FTP.BINARY_FILE_TYPE);
            client.enterLocalPassiveMode();
            String filename= reporte.getTitulo()+".txt";
            File file = new File("../"+filename);
            if (!file.exists()){
                file.createNewFile();
            }
            FileWriter fw = new FileWriter(file);
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(reporte.getVendedor()+"\n"+reporte.getDescripcion());
            bw.close();
            FileInputStream fis = new FileInputStream("../"+filename);
            client.storeFile(filename, fis);
            client.logout();
            client.disconnect();
            return true;
        }catch(Exception e){
            return false;
        }
    }
}

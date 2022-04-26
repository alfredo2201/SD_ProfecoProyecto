package com.login.services;

import java.util.List;

import com.login.models.User;
import com.login.repository.IUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public boolean crearUsuario(User user){
        try{
            userRepository.save(user);            
            return true;
        }catch(Exception e){
            return false;
        }
    }

    public boolean eliminar(int id){
        try{
            userRepository.deleteById(id);                   
            return true;
        }catch(Exception e){
            return false;
        }
        
    }

    public User obtenerUsuario(String email, String password){
        try {
            return userRepository.findByEmailAndPassword(email, password).get(0);
        } catch (Exception e) {
            return null;
        }
    }
    
    public User obtenUsuarioById(int id){
        try {
            return userRepository.findById(id).get();
        } catch (Exception e) {
            return null;
        }
    }

    public List<User> obtenUsuarios(){
        try {
            return userRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }
}

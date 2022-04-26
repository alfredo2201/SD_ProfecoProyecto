package com.login.controllers;

import java.util.List;

import com.login.models.User;
import com.login.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/saveUser")
    public ResponseEntity<?> createUser(@RequestBody User usuario) {
        if((usuario.getName() != null) && (usuario.getEmail() != null) && (usuario.getPassword() != null)){            
            if(userService.crearUsuario(usuario)){
                return new ResponseEntity<>("ok", HttpStatus.OK);
            }
        }        
        return new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/allUsers")
    public List<User> allUsers(){
        return userService.obtenUsuarios();
    }

    @GetMapping("/getUser/")
    public User getUser(String email, String password){
        System.out.println(email+"  "+password);
        return userService.obtenerUsuario(email, password);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable("id") int id){
        boolean ok = userService.eliminar(id);
        if(ok){
            return "Se eliminó el usuario con el id: "+ id;
        }else{
            return "No se pudo eliminar el usuario con el id: "+ id;
        }
    }
    
}

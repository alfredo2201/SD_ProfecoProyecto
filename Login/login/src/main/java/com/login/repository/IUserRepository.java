package com.login.repository;

import java.util.List;

import com.login.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User,Integer> {
    
    public List<User>findByEmailAndPassword(String email, String password);
}

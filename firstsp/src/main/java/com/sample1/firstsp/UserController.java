package com.sample1.firstsp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/userdata")

public class UserController {
    @Autowired
    private UserService userservice;
    @PostMapping("/add")
    public User addUser(@RequestBody User user) {        
        return userservice.addUser(user);
    }
    @GetMapping("/getall")
    public List<User> getAll(){
        return userservice.getAllUsers();
    }

    
}

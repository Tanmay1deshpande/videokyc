package com.sample1.firstsp;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public UserService(UserRepository  userRepository) {
        this.userRepository = userRepository;
    }

    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User addUser(User user) {
       
        return userRepository.save(user);
    
        }
}
package com.example.React_Form_Management_App.service;

import com.example.React_Form_Management_App.model.Friends;
import org.springframework.beans.factory.annotation.*;
import com.example.React_Form_Management_App.daos.FriendsDAO;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FriendsService {


    private FriendsDAO friendsDAO;

    @Autowired
    public FriendsService(FriendsDAO friendsDAO) {
        this.friendsDAO = friendsDAO;
    }


    public List<Friends> getAllFriends() {
        return friendsDAO.findAll();
    }


   public Friends addFriend(Friends friend) {

        if(friend == null || friend.getUsername() == null || friend.getUsername().isEmpty()) {
            throw new IllegalArgumentException("Friend name cannot be null or empty");
        }

        else if(friend.getEmail() == null || friend.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Friend email cannot be null or empty");

        } else if(friend.getRole() == null || friend.getRole().isEmpty()) {
            throw new IllegalArgumentException("Friend role cannot be null or empty");
        }

        return friendsDAO.save(friend);
    }

public void deleteFriend(int id) {
    Friends friend = friendsDAO.findById(id).orElseThrow(() -> new IllegalArgumentException("Friend not found with id: " + id));
    friendsDAO.delete(friend);
 }
}

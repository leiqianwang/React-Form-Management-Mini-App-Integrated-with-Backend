package com.example.React_Form_Management_App.controller;


import com.example.React_Form_Management_App.model.Friends;
import com.example.React_Form_Management_App.service.FriendsService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/friends")
@CrossOrigin(origins = {"http://localhost:62736", "http://localhost:1234"})
public class FriendsController {

    private FriendsService friendsService;

    @Autowired
    public FriendsController(FriendsService friendsService) {
        this.friendsService = friendsService;
    }


//TODO: GET ALL FRIENDS
    @GetMapping
    public ResponseEntity<List<Friends>> getAllFriends() {
        return new ResponseEntity<>(friendsService.getAllFriends(), HttpStatus.OK);
    }


    //TODO: ADD A NEW FRIEND

    @PostMapping("/addFriend")
    public ResponseEntity<Friends> addFriend(@RequestBody Friends friends) {
        try {
            Friends addedFriend = friendsService.addFriend(friends);
            return new ResponseEntity<>(addedFriend, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    //TODO: DELETE A FRIEND
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFriend(@PathVariable int id) {
        try {
            friendsService.deleteFriend(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

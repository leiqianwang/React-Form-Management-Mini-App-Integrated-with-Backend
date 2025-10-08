package com.example.React_Form_Management_App.daos;

import com.example.React_Form_Management_App.model.Friends;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FriendsDAO extends JpaRepository<Friends, Integer> {
    // Additional query methods can be defined here if needed
}

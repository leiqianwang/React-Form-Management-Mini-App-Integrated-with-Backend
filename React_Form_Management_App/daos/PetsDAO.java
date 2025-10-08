package com.example.React_Form_Management_App.daos;

import com.example.React_Form_Management_App.model.Pets;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface PetsDAO extends JpaRepository<Pets, Integer> {

    // Add findPetsById method
    Pets findById(int id);

}

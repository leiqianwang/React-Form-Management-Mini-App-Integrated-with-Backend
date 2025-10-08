package com.example.React_Form_Management_App.service;

import org.springframework.beans.factory.annotation.*;
import com.example.React_Form_Management_App.daos.PetsDAO;
import org.springframework.stereotype.Service;
import com.example.React_Form_Management_App.model.Pets;

import java.util.List;

@Service
public class PetsService {

    private PetsDAO petsDAO;

    @Autowired
    public PetsService(PetsDAO petsDAO) {
        this.petsDAO = petsDAO;
    }

    public List<Pets> getAllPets() {
        return petsDAO.findAll();
    }

    public Pets addPet(Pets pet) {

        if (petsDAO.findById(pet.getId()) != null) {
            throw new IllegalArgumentException("Pet with id " + pet.getId() + " already exists");
        } else if (pet.getPetName()== null || pet.getPetType().isEmpty()) {
            throw new IllegalArgumentException("Pet name cannot be null or empty");

        }else {
            return petsDAO.save(pet);
        }
        }

}

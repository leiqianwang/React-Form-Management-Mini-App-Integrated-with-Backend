package com.example.React_Form_Management_App.controller;

import com.example.React_Form_Management_App.daos.PetsDAO;
import com.example.React_Form_Management_App.model.Pets;
import com.example.React_Form_Management_App.service.PetsService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/pets")
@CrossOrigin(origins = {"http://localhost:62736", "http://localhost:1234"})
public class PetsController {
    private PetsService petsService;

    @Autowired
    public PetsController(PetsService petsService) {
        this.petsService = petsService;
    }


    //TODO: GET ALL PETS
    @GetMapping
    public ResponseEntity<List<Pets>> getAllPets() {
        return new ResponseEntity<>(petsService.getAllPets(), HttpStatus.OK);
    }



    //TODO: ADD A NEW PET
    @PostMapping("/addPet")
    public ResponseEntity<Pets> addPet(@RequestBody Pets pets) {

             Pets addedPet = petsService.addPet(pets);
             return new ResponseEntity<>(addedPet, HttpStatus.CREATED);



    }

}

package com.example.React_Form_Management_App.model;


import jakarta.persistence.*;

@Entity
@Table(name = "pets")
public class Pets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String petName;
    private String petType;


    public Pets() {
        // Default constructor
    }

    public Pets(int id, String petName, String petType) {
        this.id = id;
        this.petName = petName;
        this.petType = petType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    @Override
    public String toString() {
        return "Pets{" +
                "id=" + id +
                "petName='" + petName + '\'' +
                ", petType='" + petType + '\'' +
                '}';
    }
}

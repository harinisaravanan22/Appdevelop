package com.example.demo.model;

import java.util.List;

//import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Agent {
    @Id
    private int agent_id;
    private String name;
    private String address;

    //agent to customer
     @OneToMany(mappedBy = "agent",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Customer> customer;


//     //agent to admin
//    @ManyToOne(fetch = FetchType.LAZY)
//    //@JoinColumn("id")
//     @JsonBackReference
//     private Admin admin;
    
    public Agent() {
    }
    public Agent(int agent_id, String name, String address) {
        this.agent_id = agent_id;
        this.name = name;
        this.address = address;
    }
    public int getId() {
        return agent_id;
    }
    public void setId(int agent_id) {
        this.agent_id = agent_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
   
}

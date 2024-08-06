package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;


@Entity
public class Customer {
    @Id
    private String cust_addr;
    private float acc_bal;

    //customer to user
    @OneToOne(fetch = FetchType.LAZY)
    //@JoinColumn("id")
    @JsonBackReference
    private User user;


    //customer to property
     @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Property> property;

    //customer to agent
    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn("id")
    @JsonBackReference
    private Agent agent;

    public Customer() {
    }
    public Customer(String cust_addr, float acc_bal) {
        this.cust_addr = cust_addr;
        this.acc_bal = acc_bal;
    }
    public String getCust_addr() {
        return cust_addr;
    }
    public void setCust_addr(String cust_addr) {
        this.cust_addr = cust_addr;
    }
    public float getAcc_bal() {
        return acc_bal;
    }
    public void setAcc_bal(float acc_bal) {
        this.acc_bal = acc_bal;
    }
    
}

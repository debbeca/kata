package com.bdd.kata;

import java.math.BigDecimal;

/**
 * Created by walid on 29/09/18.
 */
public class Compte {
    private Double balance ;
    public Compte(double balance) {
        this.balance = balance;
    }

    public void deposer(Double depot) {
        this.balance += depot;
    }

    public Double getBalance() {
        return balance;
    }

    public void retirer(Double retrait) {
       this.balance-=retrait;
    }
}

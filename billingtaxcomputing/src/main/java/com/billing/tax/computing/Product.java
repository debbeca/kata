package com.billing.tax.computing;

import java.math.BigDecimal;

/**
 * Created by walid on 14/10/18.
 */
public class Product {
    private  String libelle;
    private String type;
    private BigDecimal prix;

    public Product(String libelle, String type) {
        this.libelle = libelle;
        this.type = type;
    }

    public void setPrix(BigDecimal prix) {
        this.prix = prix;
    }

    public BigDecimal computeTax() {
        return this.prix.multiply(BigDecimal.valueOf(0.2)) ;
    }
}

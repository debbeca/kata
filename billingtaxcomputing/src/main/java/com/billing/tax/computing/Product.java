package com.billing.tax.computing;

import java.math.BigDecimal;

/**
 * Created by walid on 14/10/18.
 */
public class Product {
    private  String libelle;
    private ProductType type;
    private BigDecimal prix;
    private  boolean imported;

    public Product(String libelle, ProductType type) {
        this.libelle = libelle;
        this.type = type;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public BigDecimal getPrix() {
        return prix;
    }

    public void setPrix(BigDecimal prix) {
        this.prix = prix;
    }

    public boolean isImported() {
        return imported;
    }

    public void setImported(boolean imported) {
        this.imported = imported;
    }

    public BigDecimal computeTax() {

        BigDecimal tva =roundUp( this.type.calculation.calculerTVA(this.prix));


        if(this.isImported()){
            tva = tva.add(roundUp(this.prix.multiply(BigDecimal.valueOf(0.05))));
        }

        return  tva;

    }


    public static BigDecimal roundUp(BigDecimal value) {
        return BigDecimal.valueOf(Math.round( value.doubleValue() * 100.0 / 5.0) * 5.0 / 100.0);
    }

}

package com.billing.tax.computing;

import java.math.BigDecimal;

public interface TaxingStrategy{

    BigDecimal calculerTVA(BigDecimal prix);

    static  TaxingStrategy cultural(){
        return    prix -> prix.multiply(BigDecimal.valueOf(0.05));
    }
    static  TaxingStrategy alimentation(){
        return    prix -> prix.multiply(BigDecimal.valueOf(0.20));
    }
    static  TaxingStrategy medicament(){
        return    prix -> prix.multiply(BigDecimal.valueOf(0.05));
    }
    static TaxingStrategy autres(){
        return    prix -> prix.multiply(BigDecimal.valueOf(0.20));
    }
}
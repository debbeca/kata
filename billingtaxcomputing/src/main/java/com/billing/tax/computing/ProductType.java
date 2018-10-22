package com.billing.tax.computing;

public enum ProductType {
    CULTURE(TaxingStrategy.cultural()),
    ALIMENT(TaxingStrategy.alimentation()),
    MEDICAMENT(TaxingStrategy.medicament()),
    AUTRES(TaxingStrategy.autres());

    TaxingStrategy calculation;


    ProductType(TaxingStrategy calculation) {
        this.calculation = calculation;
    }


}



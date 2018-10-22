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

    public static ProductType fromName(String name) {
        for (ProductType type : ProductType.values()) {
            if (name.equals(type.name()))
                return type;
        }
        return null;
    }


}



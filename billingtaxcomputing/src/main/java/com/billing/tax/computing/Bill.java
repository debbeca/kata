package com.billing.tax.computing;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by walid on 22/10/18.
 */
public class Bill {

    private List<Product> productList;

    public static BigDecimal computeTotalPrice(List<Product> products){
        return  products.stream()
                .map(product-> product.computeTax().add(product.getPrix()))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }


}

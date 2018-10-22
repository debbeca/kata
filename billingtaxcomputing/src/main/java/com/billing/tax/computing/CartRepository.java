package com.billing.tax.computing;

import java.util.List;

public interface CartRepository {

    void addProduct(Product product);

    List<Product> getCartProducts();
}

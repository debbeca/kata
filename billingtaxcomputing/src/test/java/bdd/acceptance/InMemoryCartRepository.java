package bdd.acceptance;

import com.billing.tax.computing.CartRepository;
import com.billing.tax.computing.Product;

import java.util.ArrayList;
import java.util.List;

public class InMemoryCartRepository implements CartRepository {

    private List<Product> cart = new ArrayList<>();

    @Override
    public void addProduct(Product product) {
        this.cart.add(product);
    }

    @Override
    public List<Product> getCartProducts() {
        return this.cart;
    }
}

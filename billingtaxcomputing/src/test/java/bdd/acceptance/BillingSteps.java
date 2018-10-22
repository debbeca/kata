package bdd.acceptance;

import com.billing.tax.computing.CartRepository;
import com.billing.tax.computing.Product;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java8.En;
import org.junit.Assert;

import java.math.BigDecimal;

public class BillingSteps implements En {

    public BillingSteps() {

        CartRepository cartRepository = new InMemoryCartRepository(); 
        
        Given("^ayant acheté ma liste de course$", () -> {

        });
        Given("^liste de course$", (DataTable dataTable) -> {
            for( Product product : dataTable.asList(Product.class)){
                cartRepository.addProduct(product);
            }
        });
        Given("^:liste de course$", (DataTable arg1) -> {
            for( Product product : arg1.asList(Product.class)){
                cartRepository.addProduct(product);
            }
        });
        When("^je passe à la caisse$", () -> {
        });


        Then("^je paie (\\d+),(\\d+)$", (Integer arg0, Integer arg1) -> {
            BigDecimal somme = BigDecimal.valueOf(arg0).add(BigDecimal.valueOf(arg1 / 100))   ;
            BigDecimal total  = cartRepository.getCartProducts().stream()
                    .map(product-> product.computeTax().add(product.getPrix()))
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            Assert.assertEquals(somme,total );
        });

    }
}

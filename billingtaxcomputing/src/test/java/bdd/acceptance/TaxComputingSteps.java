package bdd.acceptance;

import com.billing.tax.computing.Product;
import com.billing.tax.computing.ProductType;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import org.junit.Assert;

import java.math.BigDecimal;

/**
 * Created by walid on 21/10/18.
 */
public class TaxComputingSteps implements En {

    private Product product;

    public TaxComputingSteps() {
        Given("^Un produit \"([^\"]*)\" de type \"([^\"]*)\"$", (String libelle, ProductType type) -> {
            product = new Product(libelle,type);
        });
        When("^j'achete le produit à \"([^\"]*)\"$", (BigDecimal price) -> {
            product.setPrix(price);
        });
        Then("^je paie une taxe de \"([^\"]*)\"$", (BigDecimal tax) -> {
            Assert.assertEquals(tax, product.computeTax());
        });
        And("^le produit est importé$", () -> {
            product.setImported(true);
        });
    }
}

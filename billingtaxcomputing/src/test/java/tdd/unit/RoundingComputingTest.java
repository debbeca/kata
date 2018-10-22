package tdd.unit;

import com.billing.tax.computing.Product;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;

public class RoundingComputingTest {


    @Test
    public void shouldReturnOneeuroWhenTaxeComputed99cent(){
        BigDecimal value = BigDecimal.valueOf(0.99);
        Assert.assertEquals(BigDecimal.valueOf(1.00), Product.roundUp(value));
    }
}
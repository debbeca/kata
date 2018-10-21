package bdd.acceptance;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by walid on 14/10/18.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/FeaturesReport"},
        features = {"src/test/resources"}
)
public class TaxComputingTest {
}

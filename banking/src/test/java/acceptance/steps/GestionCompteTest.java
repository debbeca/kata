package acceptance.steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by walid on 29/09/18.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        plugin = {"pretty", "html:FeaturesReport"}
)
public class GestionCompteTest {
}

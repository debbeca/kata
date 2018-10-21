package acceptance.steps;

import com.bdd.kata.Compte;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by walid on 29/09/18.
 */
public class GestionCompte {

    private  Compte myAccount;

    @Given("^Ayant (\\d+) euros dans mon compte$")
    public void ayantEurosDansMonCompte(Double balance) throws Throwable {
        myAccount = new Compte(balance);
    }

    @When("^Je dépose (\\d+) euros$")
    public void jeDeposeEuros( Double depot) throws Throwable {
        myAccount.deposer(depot);
    }

    @Then("^J'ai (\\d+) euros dans ma balance$")
    public void jAiEurosDansMaBalance(Double balance) throws Throwable {
        Assert.assertEquals(balance, myAccount.getBalance());
    }

    @When("^Je retire (\\d+) euros$")
    public void jeRetireEuros(Double retrait) throws Throwable {
        myAccount.retirer(retrait);
    }
}

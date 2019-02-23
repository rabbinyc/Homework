package stepDefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefination {

    @Given("^User is on NetBanking Landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {
      System.out.println("Naviaget to landing page");
    }
    @Given("^validate the browser$")
    public void validate_the_browser() throws Throwable {
    	System.out.println("Browser is present");
    }

    @When("^Browser is trggered$")
    public void browser_is_trggered() throws Throwable {
    	System.out.println("Browser is started");
    }

    @Then("^check if browser is displayed$")
    public void check_if_browser_is_displayed() throws Throwable {
    	System.out.println("Browser is displayed");
    }

    @When("^User login into application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_application_with_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
    	System.out.println( strArg1);
    	System.out.println( strArg2);
    }

    @Then("^Home page is populated$")
    public void home_page_is_populated() throws Throwable {
    	System.out.println("Home page is popluated");
    }

    @And("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are_something(String strArg1) throws Throwable {
    	System.out.println( strArg1);
    }

}




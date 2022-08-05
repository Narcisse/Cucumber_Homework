package steps;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class StepsDefinition extends TestBase {
	
	WebDriver driver;
	LoginPage loginPage;
	
	@Before
	public void initRunner() {
		driver = init();
		 loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
	
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the_username(String username)  {
		loginPage.enterUsername(username);
	}

	@When("^User enters the\"([^\"]*)\"$")
	public void user_enters_password_as(String password)  {
	    loginPage.enterPassword(password);
	}

	@And("^User clicks on login$")
	public void user_clicks_on()  {
		loginPage.clickSubmit();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_dashboard_page()  {
		loginPage.validateDashboard();
	}
	@And ("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() {
		loginPage.clickBankCash();
	}
	@And ("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		loginPage.clickNewAccount();
	}

	@Then("^User enters\"([^\"]*)\"in accounts page$")
	public void user_enters_in_accounts_page(String title)  {
		loginPage.accountTitlte(title);
	}
//
//	@Then("^User should be able to validate account created successfully$")
//	public void user_should_be_able_to_validate_account_created_successfully() {
//	    
//	}


}
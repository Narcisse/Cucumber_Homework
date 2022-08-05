package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	
	WebDriver driver;
	
	
	public void LoginPage(WebDriver driver) {
		this.driver = driver;
			
	}
	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]") WebElement USERNAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]") WebElement PASSWORD_ELEMEMT;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button") WebElement SUBMIT_ELEMEMT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[2]/div/h2") WebElement Dashboard_ELEMEMT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]") WebElement BankCash_ELEMEMT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a") WebElement NewAccount_ELEMEMT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]") WebElement AccountTitle_ELEMEMT;
	
	public void enterUsername(String username) {
		USERNAME_ELEMENT.sendKeys(username);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	}
	public void enterPassword(String password) {
		PASSWORD_ELEMEMT.sendKeys(password);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	}
	public void clickSubmit() {
		SUBMIT_ELEMEMT.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	}
	public void validateDashboard() {
		
		Assert.assertEquals("Dashboard", Dashboard_ELEMEMT.getText());
	}
	
	public void clickBankCash() {
		BankCash_ELEMEMT.click();

	}
	public void clickNewAccount() {
		NewAccount_ELEMEMT.click();
  }
	public void accountTitlte(String title) {
		AccountTitle_ELEMEMT.sendKeys(title);
  }
}


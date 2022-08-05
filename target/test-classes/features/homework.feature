Feature: Techfios bank and cash New Account Functionality 

Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "<username>" 
	When User enters the"<password>"
	And  User clicks on login 
	Then User should land on Dashboard page 
	And User clicks on bankCash
	And User clicks on newAccount
	And User enters"<accountTitle>"in accounts page 
	#And User enters"<description>"in accounts page 
	#And User enters"<initialBalance>"in accounts page 
#	And User enters"<accountNumber>"in accounts page 
#	And User enters"<contactPerson>"in accounts page 
#	And User enters"<Phone>"in accounts page 
#	And User enters"<accountTitle>"in accounts page 
#	And User enters"<internetBankingURL>"in accounts page 
	#And User clicks on"<submit>"
	#Then User should be able to validate account created successfully
	
	Examples:
|username|password|accountTitle|
|demo@techfios.com|abc123|Daily Account|
#|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|

#|EveryDay Account|$20000|987654321|Imigongo|250|www.techfios.com|



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/homework.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters\"\u003caccountTitle\u003e\"in accounts page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#And User enters\"\u003cdescription\u003e\"in accounts page"
    },
    {
      "line": 14,
      "value": "#And User enters\"\u003cinitialBalance\u003e\"in accounts page"
    },
    {
      "line": 15,
      "value": "#\tAnd User enters\"\u003caccountNumber\u003e\"in accounts page"
    },
    {
      "line": 16,
      "value": "#\tAnd User enters\"\u003ccontactPerson\u003e\"in accounts page"
    },
    {
      "line": 17,
      "value": "#\tAnd User enters\"\u003cPhone\u003e\"in accounts page"
    },
    {
      "line": 18,
      "value": "#\tAnd User enters\"\u003caccountTitle\u003e\"in accounts page"
    },
    {
      "line": 19,
      "value": "#\tAnd User enters\"\u003cinternetBankingURL\u003e\"in accounts page"
    },
    {
      "line": 20,
      "value": "#And User clicks on\"\u003csubmit\u003e\""
    },
    {
      "line": 21,
      "value": "#Then User should be able to validate account created successfully"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Daily Account"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2033307200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters\"Daily Account\"in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 576235800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "StepsDefinition.user_enters_the_username(String)"
});
formatter.result({
  "duration": 3095909900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "StepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3084237500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_clicks_on()"
});
formatter.result({
  "duration": 3713325800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 39200200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 52951900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 259875300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daily Account",
      "offset": 12
    }
  ],
  "location": "StepsDefinition.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 71666100,
  "status": "passed"
});
});
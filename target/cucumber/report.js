$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is trggered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check if browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_trggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on NetBanking Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User login into application with username \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 43
    },
    {
      "val": "1234",
      "offset": 62
    }
  ],
  "location": "stepDefination.user_login_into_application_with_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is trggered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check if browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_trggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on NetBanking Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User login into application with username \"john\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 43
    },
    {
      "val": "4321",
      "offset": 63
    }
  ],
  "location": "stepDefination.user_login_into_application_with_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are_something(String)"
});
formatter.result({
  "status": "skipped"
});
});
Feature: Application Login

Background:

Given validate the browser
When Browser is trggered
Then check if browser is displayed 

@RegTest
Scenario: Home page default login
Given User is on NetBanking Landing page
When User login into application with username "jin" and password "1234"
Then Home page is populated
And Cards displayed are "true"

@SmokeTest
Scenario: Home page default login
Given User is on NetBanking Landing page
When User login into application with username "john" and password "4321"
Then Home page is populated
And Cards displayed are "false"
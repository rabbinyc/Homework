package stepDefinations;

import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@SmokeTest")
	public void beforevalidation()
	{
		System.out.println("Smoke before Regression");
	}
}

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("user have the dashboard url", () => {
  cy.visit("/");
});

When("enter {string} and {string}", (email, password) => {
  cy.enterText("login-email", email);
  cy.enterText("login-password", password);
});

And("click on login button", () => {
  cy.clickOnElement("login-button");
});

Then("user can login to dashboard-orders tab", () => {
  cy.url().should("include", "/orders/pending");
});

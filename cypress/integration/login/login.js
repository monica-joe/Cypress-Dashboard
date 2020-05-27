import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("user have the dashboard url", () => {
  cy.visit("/");
});

When("enter {string} and {string}", (username, password) => {
  cy.findByName("email").type(username);
  cy.wait(200);
  cy.findByName("password").type(password);
  cy.wait(200);
});

And("click on login button", () => {
  cy.findByClass(
    "whitespace-no-wrap.relative.group.flex.items-center.justify-center.leading-none.font-semibold.rounded.border.focus:outline-none.h-10.px-3.md:px-6.text-sm.bg-primary-base.border-transparent.text-white.hover:bg-primary-600.focus:bg-primary-base.focus:border-primary-600.active:bg-primary-700.w-full"
  ).click();
});

Then("user can login to dashboard-orders tab", () => {
  cy.url().should("include", "/orders/pending");
});

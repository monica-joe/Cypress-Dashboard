// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//find element by data-testid and click on it
Cypress.Commands.add("clickOnElement", (testElement) => {
  cy.get(`[data-testid ="${testElement}"]`).click();
});

//find element by data-testid and type in it
Cypress.Commands.add("enterText", (testElement, testData) => {
  cy.get(`[data-testid="${testElement}"]`).type(testData);
});

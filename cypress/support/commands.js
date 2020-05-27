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

//find element by class
Cypress.Commands.add("findByClass", (testClass) => {
  cy.get(`[class="${testClass}"]`);
});

//find element by name
Cypress.Commands.add("findByName", (testName) => {
  cy.get(`[name="${testName}"]`);
});

//find element and click on it
Cypress.Commands.add("click", (testElement) => {
  cy.get(`[class="${testElement}"]`).click();
});

//find element and type text in it
Cypress.Commands.add("type", (testElement, testaData) => {
  cy.get(`[class="${testElement}"]`).type(testaData);
});

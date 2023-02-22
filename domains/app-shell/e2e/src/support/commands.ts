// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  type KeyboardControl = Record<
    'tab' | 'space' | 'enter',
    <K extends keyof HTMLElementTagNameMap>() => Chainable<
      JQuery<HTMLElementTagNameMap[K]>
    >
  >;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> extends KeyboardControl {
    login(email: string, password: string): void;

    fillControls<K extends keyof HTMLElementTagNameMap>(
      values: Array<string | true>
    ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.tab().type(email).tab().type(password).enter();
  console.log('Custom command example: Login', email, password);
});
Cypress.Commands.add(
  'fillControls',
  <K extends keyof HTMLElementTagNameMap>([first, ...values]: Array<
    string | true
  >) => {
    const fill = (cy, x) => (typeof x === 'string' ? cy.type(x) : cy.space());
    return values.reduce(
      (cy, x) => fill(cy.tab(), x),
      fill(cy.focused(), first) as Cypress.Chainable<
        JQuery<HTMLElementTagNameMap[K]>
      >
    );
  }
) as unknown;
Cypress.Commands.add('tab', () => {
  cy.realPress('Tab');
  return cy.focused();
});
Cypress.Commands.add('enter', () => {
  cy.realPress('Enter');
  return cy.focused();
});
Cypress.Commands.add('space', () => {
  cy.realPress('Space');
  return cy.focused();
});
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

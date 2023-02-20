import { getGreeting } from '../support/app.po';

describe('login', () => {
  beforeEach(() => cy.visit('/'));

  it('should be ok', () => {
    cy.fillControls(['my-email@something.com', 'myPassword', true])
      .tab()
      .should('have.attr', 'type', 'submit')
      .enter();
  });
});

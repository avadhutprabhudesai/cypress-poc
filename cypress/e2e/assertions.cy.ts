/**
 * Assert following about an element
 *  - length
 *  - value
 *  - text
 *  - visibility
 *  - state
 */

describe('Assertions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('length', () => {
    cy.get('option').should('have.length', 9);
    cy.get('label').should('have.length', 7);
  });
  it('value', () => {
    cy.get('input#email').type('a@b.com').should('have.value', 'a@b.com');
  });
  it('text content', () => {
    cy.findByRole(/button/i).contains(/create/i);
    cy.findByRole(/button/i).should('have.text', 'Create');
    cy.findByRole(/button/i).should('contain', 'Create');
    cy.findByRole(/button/i).should('include.text', 'Creat');

    cy.contains('button', /create/i).click();
  });
  it('state', () => {
    cy.findByLabelText(/html/i).check().should('be.checked');
  });
});

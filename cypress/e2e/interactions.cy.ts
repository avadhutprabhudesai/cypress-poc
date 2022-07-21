describe('Interactions', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('click()', () => {
    cy.findByLabelText(/email/i).click().should('have.focus');
  });
  it('select()', () => {
    cy.get('select').select('audi').should('have.value', 'audi');
  });
  it('type() and clear()', () => {
    cy.get('input#email')
      .type('john.doe@gmail.com')
      .should('have.value', 'john.doe@gmail.com')
      .clear()
      .should('have.value', '');
  });
  it('check() and uncheck()', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .uncheck()
      .should('not.be.checked');
  });
  it('radio check()', () => {
    cy.get('input#html').should('be.not.checked').check().should('be.checked');

    cy.get('input#css').check();

    cy.get('input#html').should('be.not.checked');
  });
  it('trigger()', () => {
    cy.findByRole(/button/i).trigger('mouseenter', 'center');
  });
});

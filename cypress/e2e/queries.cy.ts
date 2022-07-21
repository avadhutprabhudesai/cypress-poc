describe('Query API', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('find()', () => {
    cy.findByRole(/form/i)
      .find('button')
      .contains(/create/i);
  });
  it('filter()', () => {
    cy.get('input').filter('[type="password"]');
  });

  it('first()', () => {
    cy.get('ul li').first();
  });
  it('next()', () => {
    cy.findByText(/email/i).next();
  });
  it('nextAll()', () => {
    cy.get('ul li ul li:first').nextAll();
  });
  it('nextUntil()', () => {
    cy.findByText(/email/i).nextUntil('label');
  });
  it('siblings()', () => {
    cy.get('label').siblings('label');
  });
  it('focused()', () => {
    cy.focused().should('not.exist');
  });
});

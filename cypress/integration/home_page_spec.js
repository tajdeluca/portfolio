describe('The homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has a header', () => {
    cy.get('.header');
  });

  it('has only one h1', () => {
    cy.get('h1').its('length').should('eq', 1);
  });

  it('has a h2', () => {
    cy.get('h2');
  });
});

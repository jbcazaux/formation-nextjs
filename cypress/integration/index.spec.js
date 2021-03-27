context('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should find the titles of the homepage', () => {
    cy.get('h3').eq(0).contains('Photos');
    cy.get('h3').eq(1).contains('Posts');
  });

  it('should find the photos of the homepage', () => {
    cy.get('#photos>li').should('have.length', 10);
  });

  it('should find the posts of the homepage', () => {
    cy.get('#posts>li').should('have.length', 10);
  });
});
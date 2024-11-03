describe('Footer Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('renders the Footer component correctly', () => {
    cy.get('.footer-title').should('contain', 'INFO');

    cy.get('.footer-links').find('a').should('have.length', 3);
    cy.get('.footer-links').find('a').eq(0).should('have.attr', 'href', '#pricing');
    cy.get('.footer-links').find('a').eq(1).should('have.attr', 'href', '#about');
    cy.get('.footer-links').find('a').eq(2).should('have.attr', 'href', '#contacts');

    cy.get('.footer-logo img').should('have.attr', 'alt', 'Boom Van Behoefte Logo');

    cy.get('.scroll-to-top').should('exist');
  });

  it('should navigate to home when clicking on the Home link', () => {
    cy.url().should('include', '/');
  });

  it('should navigate to collections when clicking on the Collections link', () => {
    cy.get('.footer-nav').find('li').eq(1).find('a').scrollIntoView().click();

    cy.url().should('include', '/collections');
  });

  it('should scroll to top when clicking the scroll to top button', () => {
    cy.scrollTo(0, 500);

    cy.get('.scroll-to-top').click();

    cy.window().its('scrollY').should('equal', 0);
  });
});

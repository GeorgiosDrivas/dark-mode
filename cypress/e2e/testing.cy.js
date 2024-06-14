describe('dark mode', () => {
  it('passes', () => {
    cy.visit('/');

    const btn = cy.get(".slider");
    const body = cy.get("body");
    btn.click();

    cy.get("body").should("have.css", "background-color", "rgb(0, 0, 0)");
    cy.get("body").should("have.css", "color", "rgb(255, 255, 255)");

    btn.click();

    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.get("body").should("have.css", "color", "rgb(0, 0, 0)");
  })
})
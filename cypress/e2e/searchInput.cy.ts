describe("Search input", () => {
  it("modifies the query params in the URL", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Search").click().type("{selectall}{backspace}").type("cats");
    cy.url().should("include", "cats");
    cy.url().should("include", "page=1");
  });
  it("modifies its own value", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Search").click().type("{selectall}{backspace}").type("cats");
    cy.get('[data-testid="search"]').should("have.value", "cats");
  });
});

describe("Sort by selector", () => {
  it("modifies the query params in the URL", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Sort by").click().type("{downArrow}");
    cy.contains("Latest").click();
    cy.url().should("include", "latest");
    cy.url().should("include", "page=1");
  });
});

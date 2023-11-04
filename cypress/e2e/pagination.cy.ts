describe("Pagination", () => {
  it("previous button is diabled when on page 1", () => {
    cy.visit("http://localhost:3000/?page=1");

    cy.get('[data-testid="prev"]').should("be.disabled");
  });

  it("next button is enabled when on page 1", () => {
    cy.visit("http://localhost:3000/?page=1");

    cy.get('[data-testid="next"]').should("be.enabled");
  });

  it("current page shows 1", () => {
    cy.visit("http://localhost:3000/?page=1");

    cy.get('[data-testid="current-page"]').should("have.text", "1");
  });

  it("clicking the next page button should increment page", () => {
    cy.visit("http://localhost:3000/?page=1");

    cy.get('[data-testid="next"]').click();
    cy.get('[data-testid="prev"]').should("be.enabled");
    cy.url().should("include", "page=2");
    cy.get('[data-testid="current-page"]').should("have.text", "2");
  });

  it("clicking the prev page button on page 2 should decrement page", () => {
    cy.visit("http://localhost:3000/?page=2");

    cy.get('[data-testid="prev"]').click();
    cy.get('[data-testid="prev"]').should("be.disabled");
    cy.url().should("include", "page=1");
    cy.get('[data-testid="current-page"]').should("have.text", "1");
  });

  it("going to the last page disables next button", () => {
    cy.visit("http://localhost:3000/?page=1");

    cy.get('[data-testid="last-page"]')
      .invoke("text")
      .then((text) => {
        cy.visit(`http://localhost:3000/?page=${text}`);
        cy.get('[data-testid="next"]').should("be.disabled");
        cy.get('[data-testid="current-page"]').should("have.text", text);
      });
  });
});

const COLORS = {
  black: "Black",
  black_and_white: "Black and white",
  blue: "Blue",
  green: "Green",
  magenta: "Magenta",
  orange: "Orange",
  purple: "Purple",
  red: "Red",
  teal: "Teal",
  white: "White",
  yellow: "Yellow",
};

describe("Color selector", () => {
  it("modifies the query params in the URL", () => {
    cy.visit("http://localhost:3000");

    Object.entries(COLORS).forEach(([id, name]) => {
      cy.contains("Color").click().type("{downArrow}");
      cy.contains(name).click();
      cy.url().should("include", `color=${id}`);
      cy.url().should("include", "page=1");
    });
  });
});

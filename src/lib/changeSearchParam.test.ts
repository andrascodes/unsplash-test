import { changeSearchParam } from "./changeSearchParam";

describe("changeSearchParam", () => {
  it("adds 1 query param to searchparams", () => {
    expect(
      changeSearchParam({
        changes: [{ name: "query", value: "hello" }],
        pathname: "/",
        searchParams: new URLSearchParams(),
      })
    ).toBe("/?query=hello");
  });

  test("adds multiple query params to searchparams", () => {
    expect(
      changeSearchParam({
        changes: [{ name: "query", value: "hello" }],
        pathname: "/",
        searchParams: new URLSearchParams(),
      })
    ).toBe("/?query=hello");
  });

  test("changes existing searchparams", () => {
    const searchParams = new URLSearchParams();
    searchParams.set("query", "hello");
    searchParams.set("page", "2");

    expect(
      changeSearchParam({
        changes: [
          { name: "query", value: "cats" },
          { name: "page", value: "3" },
        ],
        pathname: "/",
        searchParams,
      })
    ).toBe("/?query=cats&page=3");
  });

  test("changes existing searchparams when it's not root pathname", () => {
    const searchParams = new URLSearchParams();
    searchParams.set("query", "hello");
    searchParams.set("page", "2");

    expect(
      changeSearchParam({
        changes: [
          { name: "query", value: "cats" },
          { name: "page", value: "3" },
        ],
        pathname: "/dashboard",
        searchParams,
      })
    ).toBe("/dashboard?query=cats&page=3");
  });
});

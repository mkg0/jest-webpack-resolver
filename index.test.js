var resolverResults = require("./__mocks__/main.js");

describe("plugin", () => {
  it("should resolve require correctly", () => {
    expect(resolverResults).toEqual({
      foo: "foo.js",
      directoryNamed: "directoryNamed.js"
    });
  });
});

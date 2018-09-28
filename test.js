jest.mock("fs");

const fs = require("fs");

it("mocks fs.readFileSync", () => {
  fs.readFileSync.mockReturnValue("foo");
  const file = fs.readFileSync("foo.txt", "utf8");
  expect(file).toEqual("foo");
});

it("restores mock and reads file", () => {
  const file = fs.readFileSync("foo.txt", "utf8");
  expect(file).toEqual("bar");
});

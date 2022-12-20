const Divide = require("./Divide").default;
test("Divide 100 by 10 equals 10", () => {
  expect(Divide(100, 10)).toBe(10);
});

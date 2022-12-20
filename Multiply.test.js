const Multiply = require("./Multiply").default;
test("Multiply 3 and 7 equals 21", () => {
  expect(Multiply(3, 7)).toBe(21);
});

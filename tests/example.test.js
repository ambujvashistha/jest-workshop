const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("Check for subtotal data type", () => {
  expect(() => calculateFinalAmount("100", "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("Check for invalid coupon", () => {
  expect(() => calculateFinalAmount(100, "DISCOUNT")).toThrow("Invalid Coupon");
});

test("Check for correct value for discount SAVE10", () => {
  expect(calculateFinalAmount(1250, "SAVE10")).toBe(1087.5);
});

test("Check for correct value for discount FLAT50", () => {
  expect(calculateFinalAmount(1250, "FLAT50")).toBe(1137.5);
});
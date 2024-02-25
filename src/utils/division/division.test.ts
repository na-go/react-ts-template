import { division } from ".";

test("number array", () => {
  expect(division(10, 5)).toEqual(2);
});

test("divide by 0", () => {
  expect(division(10, 0)).toEqual(null);
});

test("divide by null", () => {
  expect(division(10, null)).toEqual(null);
});

test("divide by null", () => {
  expect(division(null, 10)).toEqual(null);
});

test("divide by null", () => {
  expect(division(null, null)).toEqual(null);
});

test("divide by null", () => {
  expect(division(0, 10)).toEqual(0);
});
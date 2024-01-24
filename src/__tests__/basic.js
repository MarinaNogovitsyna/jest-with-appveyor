import { calculateTotal } from "../calculate.js";

test("calculateTotal sum without discount", () => {
  const list = [
    {
      id: 23,
      name: "Война и мир",
      count: 3,
      price: 400,
    },
    {
      id: 44,
      name: "Js",
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

test("calculateTotal sum with discount", () => {
  const list = [
    {
      id: 23,
      name: "Война и мир",
      count: 3,
      price: 401,
    },
    {
      id: 44,
      name: "Js",
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});

test("basic test", () => {
  let result = 4;
  expect(result).toBe(4);
});

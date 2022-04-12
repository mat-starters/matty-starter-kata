const {EvenOrOdd} = require('./EvenOrOdd')

let input1 = 1;
let expectedOutput1 = "Odd";
let input2 = 2;
let expectedOutput2 = "Even";
let input3 = 3;
let expectedOutput3 = "Odd";

test("function tests  challenge1.", () => {
  expect(EvenOrOdd(input1)).toBe(expectedOutput1);
  expect(EvenOrOdd(input2)).toBe(expectedOutput2);
  expect(EvenOrOdd(input3)).toBe(expectedOutput3)
})

//npm
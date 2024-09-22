const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Task1

test('Multiply two numbers',()=>{
  expect(calculator.multiply(100,3.5)).toBe(350);
})

test('Multiply two numbers',()=>{
  expect(calculator.multiply(100,0)).toBe(0);
})

test('Divide two numbers',()=>{
  expect(calculator.divide(100,25)).toBe(4);
})

test('Divide a number by zero',()=>{
  expect(calculator.divide(100,0)).toBe(Infinity);
})  

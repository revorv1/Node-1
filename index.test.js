const index = require('./index.js');

test('km por litro com gasolina', () => {
  expect(index.calcularGasto(1000, "gasolina")).toBe(62.5);
});
import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("debería devolver el mismo num si no siuue las reglas", () => {
    expect(fizzbuzz(1)).toEqual('1'); // Corrección: usar multiplicar y resultado correcto
  });

  it("debería devolver Fizz si es 3", () => {
    expect(fizzbuzz(3)).toEqual('Fizz'); // Corrección: usar multiplicar y resultado correcto
  });

  it("debería devolver Fizz si es multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual('Fizz'); // Corrección: usar multiplicar y resultado correcto
  });
  
  it("debería devolver Buzz si es 5", () => {
    expect(fizzbuzz(5)).toEqual('Buzz'); // Corrección: usar multiplicar y resultado correcto
  });

  it("debería devolver Buzz si es multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual('Buzz'); // Corrección: usar multiplicar y resultado correcto
  });

  it("debería devolver Buzz si es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz'); // Corrección: usar multiplicar y resultado correcto
  });

});
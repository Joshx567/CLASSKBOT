import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("debería devolver el mismo num si no sigue las reglas", () => {
    expect(fizzbuzz(1)).toEqual('1'); 
  });

  it("debería devolver el mismo num si no sigue las reglas", () => {
    expect(fizzbuzz(2)).toEqual('2'); 
  });
  
  it("debería devolver Fizz si es 3", () => {
    expect(fizzbuzz(3)).toEqual('Fizz'); 
  });

  it("debería devolver Fizz si es multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual('Fizz'); 
  });
  
  it("debería devolver Buzz si es 5", () => {
    expect(fizzbuzz(5)).toEqual('Buzz'); 
  });

  it("debería devolver Buzz si es multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual('Buzz'); 
  });

  it("debería devolver Buzz si es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz'); 
  });
});
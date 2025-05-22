import { asignarNumeroToFizzBuzz, fizzbuzz2 } from "./fizzbuzz2";

describe("Fizzbuzz de un numero", () => {
  it("Numero sin regla", () => {
    expect(asignarNumeroToFizzBuzz(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(asignarNumeroToFizzBuzz(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(asignarNumeroToFizzBuzz(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    expect(asignarNumeroToFizzBuzz(6)).toEqual("Fizz");
    expect(asignarNumeroToFizzBuzz(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    expect(asignarNumeroToFizzBuzz(10)).toEqual("Buzz");
    expect(asignarNumeroToFizzBuzz(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    expect(asignarNumeroToFizzBuzz(15)).toEqual("FizzBuzz");
    expect(asignarNumeroToFizzBuzz(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      expect(fizzbuzz2(3)).toEqual("1, 2, Fizz");
      expect(fizzbuzz2(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
import multiplicar from "./multiplicar.js";

describe("multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(6, 6)).toEqual(36); // Corrección: usar multiplicar y resultado correcto
  });
});

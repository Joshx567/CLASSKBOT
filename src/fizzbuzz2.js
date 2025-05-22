function asignarNumeroToFizzBuzz(numero) 
{
  let fizzbuzz = "";

  if (esMultiploDe(numero, 3) && esMultiploDe(numero, 5)) return "FizzBuzz";
  if (esMultiploDe(numero, 3)) return "Fizz";
  if (esMultiploDe(numero, 5)) return "Buzz";

  return numero.toString();
}

function esMultiploDe(n, multiplo)
{
    return n % multiplo == 0;
}

function fizzbuzz2(limite) 
{
  let resultadofizzbuzz = "";
  for (let i = 1; i <= limite; i++) {
    resultadofizzbuzz += asignarNumeroToFizzBuzz(i);
    if (i != limite) resultadofizzbuzz += ", ";
  }
  return resultadofizzbuzz;
}

export { asignarNumeroToFizzBuzz, fizzbuzz2 };
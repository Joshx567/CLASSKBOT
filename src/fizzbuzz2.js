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

function fizzbuzz2(numero) 
{
  let aux = "";
  for (let i = 1; i <= numero; i++) {
    aux += asignarNumeroToFizzBuzz(i);
    if (i != numero) aux += ", ";
  }
  return aux;
}

export { asignarNumeroToFizzBuzz, fizzbuzz2 };
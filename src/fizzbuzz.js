function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) { // Primero verifica múltiplos de 3 y 5
        return "FizzBuzz";
    }
    else if (num % 3 === 0) { // Luego múltiplos de 3
        return "Fizz";
    }
    else if (num % 5 === 0) { // Luego múltiplos de 5
        return "Buzz";
    }
    else 
    {
        return String(num); // Si no es múltiplo de 3 ni de 5, devuelve el número
    }
}

export default fizzbuzz;

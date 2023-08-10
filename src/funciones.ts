// Code tells you how, comments tells you why

/**
 * Función que calcula el área del círculo dado su radio
 * @param radio Radio del círculo
 * @returns área del círculo
 */
const areaCirculo = (radio: number): number => {
  return Math.PI * Math.pow(radio, 2);
};

areaCirculo(3);
//areaCirculo("2");

// Declaración de variable con tipo explícito y
// valor de inicialización basado en una función
let area: number = areaCirculo(2);

// Declaración de función sin tipo de retorno
const showMessage1 = (message: string): void => {
  console.log(message);
};
showMessage1("hello");

// Declaración de función con argumentos con valores por defecto
const showMessage2 = (message: string = "hola") => {
  console.log(message);
};

showMessage2();
showMessage2("mundo");

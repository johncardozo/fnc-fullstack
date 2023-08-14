// Declaración con tipo implícito (JS Style)
let age;
age = 1;
age = "Cata";

console.log(age);

// Declaración con tipo explícito (TS Style)
// Tipos de dato: string, number, boolean
let weight: number;
weight = 70;
weight = 71.3;
console.log(weight);

// Tipo Union
let identificador: string | number;
identificador = 1;
identificador = "FNC";
console.log(identificador);

// Creación de tipo a partir de Union = Alias
type StringOrNumber = string | number;
type Identifier = string | boolean | null;

let strOrNum: StringOrNumber;
strOrNum = 1;
strOrNum = "ABC";
console.log(strOrNum);

// Declaración de arreglo con Alias
let arregloIds: Identifier[];

// Declaración de función
function miFuncion(id: Identifier) {
  console.log(`Valor del id: ${id}`);
}
miFuncion(false);
miFuncion("1");

// Tipo any
let anyValue: any;
anyValue = 1;
anyValue = "1";
anyValue = true;
anyValue = null;

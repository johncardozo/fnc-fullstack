// Declaración de arreglo con diferentes tipos de dato
let arregloDatos = ["Catalina", 21, true];
arregloDatos[0] = false;
console.log(arregloDatos);

// Declaración de tuples sin valor
let tuple1: [string, number, boolean];
tuple1 = ["Valeria", 10, false];
//tuple1[2] = "Hello";
console.log(tuple1);

// Declaración de tuples con inicialización
let tuple2: [string, number] = ["Emilio", 11];
console.log(tuple2);

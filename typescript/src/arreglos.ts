let heroes = ["Batman", "Superman", "Aquaman"];
console.log(heroes);
//heroes[0] = 1;
//heroes.push(1);

// Modifica los valores de un arreglo
heroes[0] = "Wonder Woman";
heroes.push("The Flash");
console.log(heroes);

let notasCurso = ["Henry", 5, "Raul", 4.5, "Sandra", 3.8];
console.log(notasCurso);
//notasCurso[0] = false;

// Declaración de arreglos con tipo implícito
// Inicialización requerida
let videoGames: string[] = [];

videoGames.push("Super Mario");
videoGames.push("Doom");
videoGames.push("Grand Turismo");
//videoGames.push(10);
console.log(videoGames);

// Imprimir el video juego y la longitud del video
videoGames.forEach((videoGame) => {
  console.log(videoGame, videoGame.length);
  console.log(
    "El video juego es " + videoGame + " con long: " + videoGame.length
  );
  console.log(`El video juego es ${videoGame} con long: ${videoGame.length}`);
});

// Declaración de arreglos con tipo Union e inicialización
let notasCurso2: (string | number)[] = [];
notasCurso2.push("Catalina");
notasCurso2.push(4.5);
//notasCurso2.push(true);

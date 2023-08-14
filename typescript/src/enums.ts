// Declaración de enum
enum TrainingType {
  TRAINING_RUN, // 0
  INTERVALS, // 1
  LONG_RUN, // 2
}

let tipo: number = 0;
tipo = 1;
if (tipo === 1) {
  console.log("El tipo es 1");
}

// Declaración de variable Enum
let tipoEntrenamiento: TrainingType;
// Solo acepta valores declarador en el enum
tipoEntrenamiento = TrainingType.TRAINING_RUN;
if (tipoEntrenamiento === TrainingType.TRAINING_RUN) {
  console.log("El tipo de entrenamiento es TRAINING RUN");
}

console.log(tipoEntrenamiento);

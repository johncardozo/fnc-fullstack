class Training {
  constructor(
    public type: string,
    readonly distance: number,
    public date: string = "",
    private comments: string = "this is a comment"
  ) {
    // this.type = type;
    // this.distance = distance;
    // this.date = date;
    // this.comments = "this is a comment";
  }
  // Definición de un método
  format() {
    return `I ran ${this.distance}km on ${this.date} - Comments: ${this.comments}`;
  }
}

// Instanciación de una clase => creación de un objeto
let training1 = new Training("INTERVALS", 8, "2023-08-05");
let training2 = new Training("LONG RUN", 21, "2023-08-06");
let training3 = new Training("TRAINING RUN", 15, "2023-08-07");
let training4 = new Training("LONG RUN", 25);

console.log(training1);
console.log(training2);
console.log(training3);

// Definición de un arreglo de objetos
let trainings: Training[] = [];
trainings.push(training1);
trainings.push(training2);
trainings.push(training3);
trainings.push(training4);

// Recorre el arreglo de objetos y ejecuta el método format en cada objeto
trainings.forEach((training) => console.log(training.format()));

// Encapsulamiento: private / public / readonly
//training1.comments = "hello world";
console.log(training1.distance);
//training1.distance = 10;

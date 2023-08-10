class Person {
  constructor(private firstName: string, private lastName: string) {}
  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Teacher extends Person {
  constructor(firstName: string, lastName: string, private code: string) {
    super(firstName, lastName);
  }
}
class Student extends Person {
  constructor(firstName: string, lastName: string, private avg: number) {
    super(firstName, lastName);
  }
}
// Instanción de clase padre
const person1 = new Person("James", "Bond");
const person2 = new Person("Jason", "Bourne");
console.log(person1.getFullName());
console.log(person2.getFullName());
// Creación de objeto hijo
const teacher1 = new Teacher("James", "Bond", "007");
console.log(teacher1);
console.log(teacher1.getFullName());

// Creación de objetos hijos
const student1 = new Student("Leonardo", "DiCaprio", 3.4);
const student2 = new Student("Brad", "Pitt", 3.1);
console.log(student1.getFullName());
console.log(student2.getFullName());

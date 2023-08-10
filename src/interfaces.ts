interface ITraining {
  type: string;
  distance: number;
  date: string;
  format(): string;
}
class LongTraining implements ITraining {
  readonly type: string;
  public distance: number;
  public date: string;
  constructor(distance: number, date: string) {
    this.type = "LONG TRAINING";
    this.distance = distance;
    this.date = date;
  }
  format(): string {
    return `This is a long training of ${this.distance}kms`;
  }
}

class Intervals implements ITraining {
  readonly type: string;
  public distance: number;
  public date: string;
  constructor(distance: number, date: string) {
    this.type = "INTERVALS";
    this.distance = distance;
    this.date = date;
  }
  format(): string {
    return `This is an intervals training of ${this.distance}kms`;
  }
}

// Creación de objetos a partir de una interface
const t1: ITraining = new LongTraining(21, "2023-08-09");
const t2: ITraining = new Intervals(8, "2023-08-06");
const t3: ITraining = new LongTraining(42, "2023-08-010");

const ts: ITraining[] = [];
ts.push(t1);
ts.push(t2);
ts.push(t3);

ts.forEach((training) => {
  console.log(training.format());
});

class SingleTon {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
  toString() {
    console.log("Doing Something....");
  }
}

const SingleTon1 = new SingleTon();
const SingleTon2 = new SingleTon();
console.log(SingleTon1 === SingleTon2);
SingleTon1.toString();

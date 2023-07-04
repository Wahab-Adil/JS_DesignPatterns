class SingleTonUsingMonoState {
  set name(name) {
    SingleTonUsingMonoState._name = name;
  }
  get name() {
    return SingleTonUsingMonoState._name;
  }
  set degree(degree) {
    SingleTonUsingMonoState._degree = degree;
  }
  get degree() {
    return SingleTonUsingMonoState._degree;
  }
  toString() {
    console.log(`name :${this.name} and degree:  ${this.degree}`);
  }
}
SingleTonUsingMonoState._name = undefined;
SingleTonUsingMonoState._degree = undefined;

const SingleTonUsingMonoState1 = new SingleTonUsingMonoState();
const SingleTonUsingMonoState2 = new SingleTonUsingMonoState();
SingleTonUsingMonoState1.name = "Abdulwahab Adil";
SingleTonUsingMonoState1.degree = "Bechlor";
SingleTonUsingMonoState1.toString(); //name:Abdulwahab Adil degree:Bechlor
SingleTonUsingMonoState2.toString(); //name:Abdulwahab Adil degree:Bechlor

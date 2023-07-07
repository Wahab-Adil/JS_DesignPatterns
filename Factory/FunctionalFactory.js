function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}
function showEmployee() {
  console.log(`name :${this.name} and he is ${this.type}`);
}

const newEmployee = new EmployeeFactory();
const EmployeesList = [];
EmployeesList.push(newEmployee.create("Adiljan", 1));
EmployeesList.push(newEmployee.create("Raqib yoon", 2));
EmployeesList.forEach((Emp) => {
  showEmployee.call(Emp);
});

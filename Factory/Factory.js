class FullTime {
  salary = 40000;
}
class PartTime {
  salary = 1000;
}
class Contractor {
  salary = 20000;
}
class Freelancer {
  salary = 15000;
}

class EmployeeFactory {
  emp = null;
  create(type) {
    switch (type) {
      case "fulltime":
        this.emp = new FullTime();
        break;
      case "parttime":
        this.emp = new PartTime();
        break;
      case "contractor":
        this.emp = new Contractor();
        break;
      case "freelancer":
        this.emp = new Freelancer();
        break;
      default:
        break;
    }
    this.emp.type = type;
    return this.emp;
  }
}
function showEmployee() {
  console.log(`salary :${this.salary} and he is ${this.type} Employee`);
}
const newEmployee = new EmployeeFactory();
const EmployeesList = [];
EmployeesList.push(newEmployee.create("fulltime"));
EmployeesList.push(newEmployee.create("parttime"));
EmployeesList.push(newEmployee.create("contractor"));
EmployeesList.push(newEmployee.create("freelancer"));

EmployeesList.forEach((Emp) => {
  showEmployee.call(Emp);
});

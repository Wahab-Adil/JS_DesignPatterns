class User {
  constructor(name) {
    this.name = name;
  }
}
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  Build() {
    return this.user;
  }
}
const Adil = new UserBuilder("Adil").setAge(22).setPhone(192992).Build();
const Hamid = new UserBuilder("Hamid").setAge(18).setPhone(34234324).Build();
console.log(Hamid);

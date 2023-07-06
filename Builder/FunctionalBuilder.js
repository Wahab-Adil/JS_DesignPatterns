function User(name) {
  this.name = name;
}
function UserBuilder(name) {
  this.newUser = new User(name);
  this.setAge = (age) => {
    this.newUser.age = age;
    return this;
  };
  this.setPhone = (phone) => {
    this.newUser.phone = phone;
    return this;
  };

  this.Build = () => {
    return this.newUser;
  };
}
const Adil = new UserBuilder("Adil").setAge(10).setPhone(23432).Build();
console.log(Adil);

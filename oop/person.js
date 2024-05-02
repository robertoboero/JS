// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};
Person.prototype.getBio = function () {
  let bio = `${this.firstName} ${this.lastName} is ${this.age} years old and he likes: `;
  this.likes.forEach((like) => {
    bio += `${like}, `;
  });
  return bio;
};
Person.prototype.setNameFromFullName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};
const me = new Person("", "", 17, ["Tech", "Music"]);

me.getBio = function () {
  return "this is fake";
};

const person2 = new Person("Rober", "Boero", 34);

me.setNameFromFullName("Roberto Boero");
console.log(me.getBio());

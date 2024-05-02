const people = [
  { name: "Robert", age: 34 },
  { name: "Scott", age: 33 },
  { name: "Annabe", age: 22 },
];

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const age22 = people.find((person) => person.age === 22);

console.log(age22.name);

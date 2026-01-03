const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];

console.log(people);

// we use EXPORTS to manually  share data from people.js file to be used in other files like modules.js
// hence now we wont have an empty object when we console log the pulledPeople variable. hence we will have the name exported replacing the empty object

// module.exports = "hello"; // exporting a string
// module.exports = people; // exporting the people array of objects"



const people1 = ["David", "Eve", "Frank"];
const age= [28, 22, 33];
module.exports= {people1, age}; // exporting multiple items as an object
// we use REQUIRE to pull/import peoples data from people.js file to use here in modules.js
const pulledPeople = require('./people');

// console.log(pulledPeople);

// outputs exports from people.js file
// console.log(pulledPeople); 
console.log(pulledPeople.people1, pulledPeople.age);


// when we want to extract specific objects from another file we use distraction method example

const {people1, age} = require('./people');

console.log(people1, age);



// built in modules in os
const os= require('os');

// info about current user
const user= os.userInfo();
console.log(user);
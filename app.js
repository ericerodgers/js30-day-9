const { red } = require("color-name");

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am an %s string!", "interpolated");
//the %s is filled in with the second argument (the stuff after the comma)
//not so necessary now that we have ES6 backtick notation.. `${hey}`

// Styled
console.log("%c I am styled", "font-size: 50px"; background: red);
//everything after %c is styled per the second argument

// warning!
console.warn("OH NOOO!");

// Error :|
console.error("OH SHIT");

// Info
console.info("Birds breathe into their bones");

// Testing
console.assert(1 === 2, "That is wrong");
//only fires if the first argument is wrong
//console.assert(1 === 1, "That is wrong") would not show up in the dev tools window

// clearing
console.clear();
//clears the dev tools window

// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);
//shows you all the properties and methods that can be called on that element
//shows all info in a dropdown menu

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    //or use console.groupCollapsed(`${dog.name}`) so dropdown is collapsed by default
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
//groups all the console.log stuff into a drop down menu

// counting
console.count('Eric');
console.count('Todd');
console.count('Eric');
console.count('David');
console.count('David');
console.count('Eric');
//counts how many of each there are

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data).json())
    .then(data => {
        console.timeEnd("fetching data")
    });
//tells you how long some process took

// table
console.table(dogs);
//takes an array and displays it as a table
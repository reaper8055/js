/** ---------------------------------------------------
// Lesson 1: import and export

import { apiKey } from "./util.js";

import defaultExport from "./util.js";

import * as util from "./util.js";

import { apiKey as defaultConfig } from "./util.js";

console.log(apiKey);

console.log(defaultExport);

console.log(util.editor);

console.log(defaultConfig);

-------------------------------------------------------**/

/** ---------------------------------------------------

// variables, values
// varialbes must use camelCase

let userMessage = "hello, world";
console.log(userMessage);

// constants
// constants cannot be reassigned!
const userMessageConst = "const: hello, world!";
console.log(userMessageConst);

// operators
// +, -, *, /, ===, >=, >, <=, <
console.log(10 === 10);

-------------------------------------------------------**/

/** ---------------------------------------------------

// functions and parameters
function greet() {
  console.log("hello from within greet function");
}

// calling the function
greet();

// referencing the function
greet;

// function with parameters
function greetUser(userName, message) {
  console.log(userName);
  console.log(message);
}

// calling the function with parameters
greetUser("JavaScript", "programming language");

// function parameters with default value
function greetUserWithDefaultParameter(userName, message = "hello") {
  console.log("userName: ", userName);
  console.log("message: ", message);
}

// calling the function
greetUserWithDefaultParameter("Thor");

// calling the function and overriding the default parameter
greetUserWithDefaultParameter("Odin", "asgard");

// functions can also return objects/values

function greetUserWithReturn(userName, message) {
  return "Hello, " + userName + " " + message;
}

// calling the function won't print anything
greetUserWithReturn("Alfheim", "the realm of lights");

// store the return value in a variable / const and print it.
const greeting = greetUserWithReturn("Alfheim", "the realm of lights");
console.log(greeting);

// Exercise: Working with Functions
function combine(a, b, c) {
  return (a * b) / c;
}
console.log(combine);

// arrow functions aka anonymous functions
// () => {}

// anonymous function using the "function" keyword
export default function() {
  console.log("hello");
}

export default (userName, message) => {
  console.log("userName: ", userName);
  console.log("message: ", message);
  return userName + " " + message;
};

-------------------------------------------------------**/

// Objects and classes

// defining a "user" object
const user = {
  name: "Loki",
  age: 1000,
};

console.log(user);

// accessing a field of an object
console.log(user.name);
console.log(user.age);

// Objects can also store functions, these functions within a object are called
// methods
const userObjectWithFunction = {
  name: "Thor",
  age: 1000,
  // method
  greet() {
    console.log("userObjectWithFunction.greet(): ", "hello!");
  },
};

console.log(userObjectWithFunction);
userObjectWithFunction.greet();

const usingThisKeyword = {
  name: "Odin",
  age: 10000,
  greet() {
    console.log("hello");
    console.log(this.name);
    console.log(this.age);
  },
};

usingThisKeyword.greet();

// Classes, methods and "this" keyword
// Class names should always start with Uppercase letter

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello");
  }
}

const user1 = new User("foo", 43);
console.log("user1: ", user1);
user1.greet();

// Arrays
// Represented by []

const hobbies = ["sports", "cooking", "reading"];
console.log(hobbies[0]);

// Array methods
hobbies.push("golang programming");
const idx = hobbies.findIndex((item) => {
  return item === "sports";
});
console.log(idx);

const newHobbies = hobbies.map((item) => {
  return item + "!";
});

console.log(newHobbies);

// array exercise
function transformtoObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}

const numberArray = [1, 2, 3, 4];
transformtoObjects(numberArray);

// destructuring arrays and objects
const nameData = ["jay", "shaw"];

/** manual destructuring
  const firstName = nameData[0];
  const lastName = nameData[1];
**/

// automatic destructuring
const [firstName, lastName] = ["jay", "shaw"];
console.log(firstName);

// destructuring objects
const userObject = {
  name: "jay",
  age: 30,
};

/** manual destructuring
  const name = userObject.name;
  const age = userObject.age;
**/

// automatic destructuring
// left {} items should be same as object's key i.e name and age.
const { name, age } = {
  name: "jay",
  age: 30,
};

// defining aliases while destructuring objects
const { name: userName, age: userAge } = {
  name: "jay",
  age: 30,
};

// destructuring function parameters
function storeOrder(order) {
  console.log("id", order.id);
  console.log("currency", order.currency);
}

function storeOrderDestructured({ id, currency }) {
  console.log("id", id);
  console.log("currency", currency);
}

const order = {
  id: 5,
  currency: "USD",
};
storeOrder(order);
storeOrderDestructured({ id: 5, currency: "USD" });

// special spread operator
const hobbiesArray = ["sports", "cooking"];
const userData = {
  name: "jay",
  age: 100,
};

const newHobbiesArray = ["reading"];

const mergedHobbiesArray = [...hobbiesArray, ...newHobbiesArray];
console.log(mergedHobbiesArray);

// spreading objects
const extendedUser = {
  isAdmin: true,
  ...userData,
};

console.log(extendedUser);

// Control structures
// if else if

const input = "hello";

if (input === "hello") {
  console.log("hello, works!");
} else if (input === "HELLO") {
  console.log("HELLO, works!");
} else {
  console.log("hello, javascript");
}

// for loop
const alphabets = ["a", "b", "c"];
for (const alphabet of alphabets) {
  console.log(alphabet);
}

// references vs primites
// objects are references
// primitive like string, bool are not references

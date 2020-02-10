# 02E_Objects

## References 

* More of a tutorial: [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* More of a reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Overview

* Objects in Java are a lot more dynamic than they are in JavaScript
* There are a lot of different ways to define an object.  We won't cover all of them.
* Difference between a JavaScript object and a JSON string.
    * JSON string is a string representation of an object.

## Dynamic Creation

```node
var car = {};
car.make="Tesla";
car.year=2020;
car.models= "S X Y Cybertruck".split(" ");
car.type = "Electric";
console.log(car);
conssole.log(JSON.strinify(car));
```
Output:
```text
{ make: 'Tesla',
  year: 2020,
  models: [ 'S', 'X', 'Y', 'Cybertruck' ],
  type: 'Electric' }
{"make":"Tesla","year":2020,"models":["S","X","Y","Cybertruck"],"type":"Electric"}  
```
## Constructor Creation

```node
function Person(first,last,age,courses){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
    this.name= ()=>{return this.firstName +" "+ this.lastName}
}

var p = new Person("Fred","Flintstone", 29, ["CSC346","ACT400", "ENG210","COM104"]);
console.log(p);
console.log(p.name());
var friend = new Person("Barney","Rubble",28,["CSC184"]);
friend.bowlingHigh = 210;
console.log(friend);
```
output
```text
Person {
  firstName: 'Fred',
  lastName: 'Flintstone',
  age: 29,
  courses: [ 'CSC346', 'ACT400', 'ENG210', 'COM104' ],
  name: [Function] }
Fred Flintstone
noynaert@evan:~/classes/csc346/csc346notes/02_javascript_node$ node 02e_code.js 
{"make":"Tesla","year":2020,"models":["S","X","Y","Cybertruck"],"type":"Electric"}
Person {
  firstName: 'Fred',
  lastName: 'Flintstone',
  age: 29,
  courses: [ 'CSC346', 'ACT400', 'ENG210', 'COM104' ],
  name: [Function] }
Fred Flintstone
Person {
  firstName: 'Barney',
  lastName: 'Rubble',
  age: 28,
  courses: [ 'CSC184' ],
  name: [Function],
  bowlingHigh: 210 }
noynaert@evan:~/classes/csc346/csc346notes/02_javascript_node$ node 02e_code.js 
{"make":"Tesla","year":2020,"models":["S","X","Y","Cybertruck"],"type":"Electric"}
Person {
  firstName: 'Fred',
  lastName: 'Flintstone',
  age: 29,
  courses: [ 'CSC346', 'ACT400', 'ENG210', 'COM104' ],
  name: [Function] }
Fred Flintstone
Person {
  firstName: 'Barney',
  lastName: 'Rubble',
  age: 28,
  courses: [ 'CSC184' ],
  name: [Function],
  bowlingHigh: 210 }
```
## Accessing members

Members may either be accessed using dot notation or array notation.  

Every object is effectively an assoiative array.

```node
console.log(book.title);
console.log(book["title"]);
```

Normally we use the dot notation.  But you have to use array notation if there is a blank space or special character in the property name.

```node
var computer = {
   "manufacturer":"Dell",
   "model number":"Latitude 4202"
};
```
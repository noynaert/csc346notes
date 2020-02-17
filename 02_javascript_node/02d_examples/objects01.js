function duh(){
    return [111,222];
}
function duh2(){
    return {"maximum":333,minimum:444};
}

var person = new Object();
person.name = "Joe";
person.age = 37;
person.courses = ["CSC346", "CSC285", "ENG211","COM104"]

console.log(JSON.stringify(person));

var car = {"make":"Tesla",
           "model":"Cybertruck",
           "year":2019
          };
console.log(JSON.stringify(car));

//access with dot or array notation
console.log(car.make);
console.log(car["make"]);
console.log(duh());
[first, second] = duh();
console.log(first);
console.log(second);
var item = duh2();
console.log(item.maximum);
console.log(item.minimum);

function twoRandom(){
    var a = Math.random();
    var b = Math.random();
    return [a,b];
}
var both = twoRandom();
console.log(both[0]);
console.log(both[1]);
[x,y] = twoRandom();
console.log("x is "+x);
console.log("y is "+ y);

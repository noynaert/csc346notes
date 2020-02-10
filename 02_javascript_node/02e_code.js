var car = {};
car.make="Tesla";
car.year=2020;
car.models= "S X Y Cybertruck".split(" ");
car.type = "Electric";
console.log(JSON.stringify(car));

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

var book = {
    "title":"Eye of the World",
    "author":"Robert Jordan",
    "pages": 1012
}
console.log(book);

console.log(book.title);
console.log(book["title"]);

var computer = {
   "manufacturer":"Dell",
   "model number":"Latitude 4202"
}


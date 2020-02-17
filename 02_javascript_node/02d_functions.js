var doubler = function (a) {
    return a * a;
}
console.log(doubler(7.7));

//ES 5 and before

var ecma5Splitter = function splitter(phrase) {
    return phrase.split(" ");
}
console.log(ecma5Splitter("How now brown cow"));

var ecma6Splitter = phrase => phrase.split(" ");
console.log(ecma6Splitter("My dog has fleas"));

///////////////

var betterSplitter = phrase => {
    var words = phrase.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;
}
console.log(betterSplitter("Rubber Bumpered Baby Buggies"));

var numbers = [1,2,3,4];
console.log(numbers.map(Math.sqrt));
console.log(numbers.map(()=>{return this;}))
console.log('----');
var multiply = (a,b)=>{return a*b;};
console.log(multiply(7,8));

var randomDigit = () => Math.floor(Math.random()*10);
console.log(randomDigit());
var words = "I am the very model of a modern major general".split(" ");
console.log(words);
var shortWords = words.filter((word)=>{
    return (word.length < 4);
});
console.log(shortWords);

console.log("Returning arrays");
function randomPair(){
    let a = Math.random();
    let b = Math.random();
    return [a,b];
}
//get results as an array
var pair = randomPair();
console.log("First is "+ pair[0]);
console.log("Second is "+ pair[1]);

//get results as variables
[x,y] = randomPair();
console.log("x is "+ x);
console.log("y is "+ y);


# 02D More Functions and Notations

## Anonymous functions

### Assigning function to a variable

```javascript
var doubler = function(a){
     return a*a;
}
console.log(doubler(7.7));
```
### Assigning function with no name at all

```html
<button onclick="function(){Math.random();}">
```

---

## Returning Arrays

### Using return value as an array:

```javascript
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
```
### Capturing return value as variables

```javascript
[x,y] = twoRandom();
console.log("x is "+x);
console.log("y is "+ y);
```

---

## "Fat Arrow" notation

This is a new feature in ES6.  It is very popular.  It allows condensed notation.

Also known as "Lambda Functions" in other languages like Python and Java.

Arrow functions must always return a value.

### Simplest case

There is one argument and only one statement in the function.
```javascript
var ecma5Splitter = function splitter(phrase){
    return phrase.split(" ");
}
console.log(ecma5Splitter("How now brown cow"));

var ecma6Splitter = phrase => phrase.split(" ");
console.log (ecma6Splitter("My dog has fleas"));
```
### Multiple lines

Use { } if the body of the function has multiple lines

```JavaScript
var betterSplitter = phrase =>{
    words = phrase.split(" ");
    for(var i=0;i<words.length;i++){
        words[i] = words[i].toLowerCase();
    }
    return words;
}
console.log(betterSplitter("Rubber Bumpered Baby Buggies"));
```

### Multiple arguments

```javascript
var multiply = (a,b)=>{return a*b;};
console.log(multiply(7,8));
```

### No arguments
```javascript
var randomDigit = () => Math.floor(Math.random()*10);
console.log(randomDigit());
```

### Practical example, filter

Notice that the first argument of the filter command requires a function: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]

```javaScript
// give random digit 0..9
var randomDigit = () => Math.floor(Math.random()*10);
console.log(randomDigit());

//find short words
var words = "I am the very model of a modern major general".split(" ");
console.log(words);
var shortWords = words.filter((word)=>{
    return (word.length < 4);
});
console.log(shortWords);
```
Another example

```javascript
var unknownWords = "I made some fudge brownies".split(" ");

var cleanWords = unknownWords.filter(function (suspect) {
    return !(suspect == 'fudge');
});
console.log(cleanWords);
```

## Does not redefine "this"

Use of arrow notation does not change the parent's "this."  


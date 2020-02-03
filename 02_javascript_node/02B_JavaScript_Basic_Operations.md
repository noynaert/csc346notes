# 02B Basic JavaScript operations

## REMEMBER:  Always open the console when developing in JavaScript!

## Arithmetic and Assignment Operators

Mostly these are the same as Java.  Keep in mind that we only have "number" type, so integer arithmetic isn't really a problem.

## Booleans

### Boolean objects

Boolean *objects* only have values of true and false.

But there are boolean *values* that can be true or false:

#### Examples of things that produce boolean values that are false

Things that "feel" like 0 or empty are false.  Everything else is true.

* false
* 0
* 0.0
* -0
* NaN
* undefined
* "" -- an empty string
* [] -- an empty array

#### Coding booleans

The "zero is false" gives some very concise, C-like code.  but it can be ambigous at times.

```javascript
<script>
    if(4 - 2*2){
        console.log("True");
    }else{
        console.log("False");
    }
```

### Boolean operators

#### Conversion operator

```==``` and ```!=``` operators force type conversion before checking for equality.

The following is true:  ``` (9 == '9')```

#### Strict operator

```===``` and ```!==``` require both the type and the value to match.

The following is false:  ``` (9 === '9')```

## Functions

```javascript
function sum(a, b){
    return a+b;
}
function printLine(){
    document.write("<hr>");
}
```

### Functions as variables

```javascript
 <script>
       function sum(a, b){
           return a+b;
       }
       function multiply(a, b){
           return a*b;
       }
 </script>
 //end of head
 //in the body
 <script>
        var bob = sum;
        console.log (bob(3,4));
        console.log(bob("Hello, ", "World"));

        bob = multiply;
        console.log(bob(8,3));
        console.log(bob("Hello, ", "World"));

        bob = function (a,b){return a%b;};
console.log(bob(17,3));
```

#### Anonymous function

```
var result = function(a,b){
    let c = 
}
```

#### Closure

A closure is a function within a function.  The inner function has access to the outer functions local variables.

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
Example is from [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

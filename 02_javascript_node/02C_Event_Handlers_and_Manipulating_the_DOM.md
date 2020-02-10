# 03C Events, Event Handlers, and Manipulating the DOM

## Events

See [https://www.w3schools.com/jsref/dom_obj_event.asp](https://www.w3schools.com/jsref/dom_obj_event.asp) for a list of DOM events

## Event Handlers

* Generally there is an "event handler" for every event.
* Put "on" in front of event to get the handler.
* Handlers are attributes.  

```text
    onevent="some JavaScipt code"
```

```javascript
   <h1 onmouseover="console.log('Over')" onmouseout="console.log('Out')">Hi</h1>
```

Usually the JavaScript code is a function.

### Anonymous functions as event handlers

```
<h1 onmouseover="function(){
    console.log('something interesting here')
}">
```
## Arrays as return objects

Functions may return arrays and objects.  For arrays, the data may either be captured as an array or assigned to individual variables

```javascript
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
```


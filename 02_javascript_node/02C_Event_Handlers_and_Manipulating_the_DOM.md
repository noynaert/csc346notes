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
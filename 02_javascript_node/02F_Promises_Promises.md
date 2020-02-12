# 02F Promises, Promises

## References

* Using Promises: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* More Technical Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Synchronous and Asynchronous Operations

Suppose two (or more) operations depend on timing.

### Synchronous Operation

In *synchronous* operations one operation "blocks" and waits for another operation to complete.  

Java function calls in most CSC 184/254 examples are examples of *synchronous* operation.

```java
public static void main(String args){
    System.out.println("Starting");
    var x = Math.sqrt(2.0);
    System.out.printf("The square root of %f is %f",2.0, x);
}
```

In the above code the main() method executes and prints "Starting." It sets up the variable x.  But then the main() method execute Math.sqrt().  The main() method cannot continue so it blocks and waits until Math.sqrt() completes.  Then main() can continue executing.

### Asynchronous Operation

In *asynchronous* operations, one operation begins another operation.  Very often in asynchronous operation there is a reasonable chance the second operation will fail.  The two operations coordinate by passing messages.  If the second operation is sucessful it probably returns some data.  If it fails it should send a notice of failure.

#### Visualizing an asynchronous operation

Web browsers do a lot of asynchronous operation.  When you go to a web page that has a lot of images the browser does not block while the files load.  The browser continues rendering the page and displaying the data as it is received.

Try this (no guarantee of success here.  It worked for me the first couple of times, then it didn't).

* Load Chrome or Chromium
* Open the developer console and click on the "Network" tab
* Visit [https://octodex.github.com/](https://octodex.github.com/)
* You should see multiple network communications start and run in parallel as each image loads.

## Callback

We have seen callback functions, mainly for event handlers.

Callbacks work best for single operations.  But they get unwieldy when there are a sequence of actions, or if there are multiple ways for something to fail.  (or both)

## Promise

A Promise is a JavaScript object.  It is returned by asynchronous function

A promise always returns a value as well as information about success or failure.

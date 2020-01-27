# 07 Forms

## Forms

Forms are used to get information from the user.  

* You may send the data to a program written in PHP, Python, Java, or Node.js to process the data from the form
* You may do the processing locally using JavaScript
* You have to do your own formatting in a form.

## The &lt;form&gt; tag

### Common attributes

* ```method=""``` -- Specifies the protocol for sending the data.
    * GET -- Sends the data as part of the URL
        * ***should only be used to retrieve data***
        * maximum URL length is 2048
        * visible to the user
        * cannot be encrypted
        * may be cached, stored in history
        * may be copied and pasted by the user
    * POST -- Sends the data in a header
        * ***used to save data or change the state of a database***
        * no maximum length
        * user cannot see it, but by default it isn't exactly secret.
        * may be encrypted
        * cannot be cached, stored, or easily manipulated by the user
    * There are other methods such as DELETE and PUT, but we will go over them later.  
* ```action=""``` -- Specifies the url of the program that will process the data.  Typically, the program does a two or three things:
     * Uses the *model*  Think of the model as the database.  Maybe the program retrieves some data or adds a record
     * Presents a *view*  The view is how the data is presented back to the user.
     * Invokes a *controller* that decides what to do with the data.  It may configure actual calls to the model and view.

## Form Controls

There are a lot of different controls.  [https://www.educba.com/html-form-controls/](https://www.educba.com/html-form-controls/)

### &lt;input&gt;

#### &lt;input type="text"&gt;

The input type=text is the great workhorse of forms.  

* It is a textbox.  It sends data as text, even if it is a number
* Always give it a ```name=""``` attribute if you are sending it to another program
* Probably use an id if you are going to process it with JavaScript.  You might give it an id or class even if you are not going to process it with JavaScript
* May give a ```value=""``` attribute.  *The field will have a value whether you give it one or not.*
* Other attributes such as ```required```.  HTML5 added a lot of new attributes

#### &lt;input type="submit"&gt;

* A button that actually sends the data.
* May have a name
* By default it says "Submit" on the button.  But if you specify a ```value=""``` attribute the value is displayed
* You may have more than one button.  But be sure to give them each a ```name=""``` attribute if you do.

#### &lt;input type="hidden"&gt;

* Always give it a name="" and a value=""
* The user does not see the hidden field on the form
* Used to pass data behind the scenes.
  * sometimes it is a token or session id
  * sometimes the api may have fields it requires, but this form always has one certain value.  

## URL with GET method

See [the 07_forms_example.html file](07_forms_example.html) 

The URL is 

```url
https://webservices.missouriwestern.edu/users/noynaert/csc346/api/generic.php?team=a&city=b&league=NFL
```
* ? ends the regular URL
* & separates the key=value pairs
* Strings must be url encoded.  See [https://www.urlencoder.org/](https://www.urlencoder.org/)




# Essential HTML

## Why learn HTML and CSS?

* Web Interfaces
* Other miscellaneous applications
* Related to things like XML
* Gateway to things like JavaScript

## Priorities

* HTML5
* Worried more about functionality
* Will skip a lot of fine points and alternatives
* Distinguish between content and style
  * html is about describing the structure of the document
  * css is about manipulating the content and establishing the style
  * Don't abuse tags to force a certain look

### Main ideas for 346

* HTML document Structure
* Displaying data
  * breaks
  * lists
  * tables
* Selectors
* VS Code
* Server mechanics
* Learn what you need on your own.  (But be careful of old sources)

## VS Code

* Get VS Code at [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
* Think of VS Code as a directory or folder editor; don't think of it as a file editor.  Open folders, not files!
* Load extensions
  * HTML Preview by George Oliveira
* Set preferences
  * I like autosave
  * Preferences
  * Direct editing in traditional menus
  * Editing the JSON.

---

## Structure of a web page

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>

    </body>
</html>
```
* Note the &lt;!DOCTYPE&gt; to start
* Tags
  * Paired tags
  * Self-closing
  * Proper nesting
* Elements
  * Tags are an element
* Parts of the page
  * &lt;html&gt; -- The "Root" tag
  * &lt;head&gt; -- Specification and resources
    * &lt;title&gt;
* &lt;body&gt;
  * The visible part of the page
  * Generally starts with a &lt;h1&gt; tag
  * Block vs Inline elements
  * Block elements always have a blank line before & after them.
  * But the blank lines of adjacent blocks may do double duty. 
  * Attributes
  * Attributes are always inside tags
  * Use a property:value pair in most cases  Occasionally just the property
  * Format is
  * property="value"
  * use lower case for property.
  * for the value, use proper case if it is something the user will see.
  * Don't put blank spaces around the = sign
  * By tradition use double quotes.  You can use single quotes (apostrophes).  
  * This usually happens with the value has a quote inside it

## Starting a Web page

* Using emmet (name the file .html and then type ! in the editor, then hit the TAB key)

## Tags to know for now

* &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;
  * Block element
  * Start with &lt;h1&gt;
  * Very often there is only 1 &lt;h1&gt; element on a page, but there can be more
  * Proper nesting
  * You are describing content, not how it looks.
  * If you don't like the way it looks fix that with CSS.
  * The smallest tag is &lt;h6&gt;
* &lt;p&gt;
  * Paragraphs
  * Block element
  * html collapses white space (applies to all tags, not just paragraphs)
    * &lt;a&gt;
  * inline element
  * Used to implement links
  * uses the href="" attribute
  * I strongly suggest copy/paste for the value, even if it is simple.


# 03 Displaying Data As Lists

## Displaying data as lines

Use the ```<br>```

This seems lazy, but it does work well at times.  Generally it is at its best when you mainly have words and not numbers.  The lines should be fairly short so word wrap is not a problem.

```html
<h2>State Parks</h2>
<p>
Central State Park<br>
Apache State Park<br>
Twin Oaks state Park
</p>
```
## Displaying tags using the &lt;pre> tag

This is another semi-lazy way to display data.  It works for data where you want to line up columns.

```html
<pre>
  CITY          POPULATION
  Peoria           125,000
  Springfield      107,000
  Chicago        2,700,000
</pre>
```

## Unordered Lists

No order is being describe

```html
<ul>
  <li>Biology</li>
  <li>Geology</li>
  <li>Physics</li>
<ul>
```

## Ordered Lists

Only use when the order is significant.

```html
<ol>
  <li>Biology</li>
  <li>Geology</li>
  <li>Physics</li>
</ol>
```

## Nested Lists

The key thing to realize is that the inner list is part of the line above it.

```html
<ul>
  <li>Biology
     <ul>
       <li>Environmental Biology</li>
       <li>Genetics</li>
       <li>Botany</li>
      </ul>
   </li>
   <li>Geology</li>
   <li>Physics</li>
<ul>
```
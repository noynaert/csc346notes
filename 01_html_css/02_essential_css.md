02 Essential CSS

## CSS

CSS is Cascading Style Sheet.

CSS is about the *style* or look of the page, not the content.

## Using CSS

* External file
* In the &lt;head&gt; of the document
* In the tag

Preferred is a file because it may apply to the entire website.

Avoid putting style in the tag if possible

## The Cascade

Rules for adjudicating between conflicting styles can get complex.  But the general idea is:

* The most local rule applies.  For example, if the external style sheet says &lt;p> tags should be blue, but the header stylesheet says &lt;p> tags should be red, then the &lt;p> tags will be red.
* The most specific rule applies.  For example, if a rule says &lt;p> tags should be blue, but another rule says &lt;p> tags immediately after a &ul> should be red, then most &lt;p> tags will be blue, but the &lt;p> tags that follow &lt;ul> tags will be red.
* Later rules override earlier rules.


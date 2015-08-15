Markdown Cheat Sheet
====================

Note: Block-level elements are those that take an entire line or more, such as headings and paragraphs. In-line elements, such as bold or italics, do not.

All code examples are followed with their output.

Paragraphs
----------

```md
Separate paragraphs (and most block-level elements) with a blank line.

Just like this.
```

Separate paragraphs (and most block-level elements) with a blank line.

Just like this.

Headings
--------

```md
# Level 1 heading
## Level 2 heading
### Level 3 heading
#### Level 4 heading

Alternative syntax for level 1 and 2 headings:

Level 1 heading
===============

Level 2 heading
---------------
```

# Level 1 heading
## Level 2 heading
### Level 3 heading
#### Level 4 heading

Alternative syntax for level 1 and 2 headings:

Level 1 heading
===============

Level 2 heading
---------------

---

Horizontal rule
---------------

```md
Create a horizontal rule with three underscores, dashes, or asterisks:
___
---
***
```

Emphasis
--------

```md
**Bold**

__Bold__

*Italic*

_Italic_

Superscript: 19^th^

Subscript: H~2~O

++Inserted++

~~Deleted~~

==Highlighted==
```

**Bold**

__Bold__

*Italic*

_Italic_

Superscript: 19^th^

Subscript: H~2~O

++Inserted++

~~Deleted~~

==Highlighted==

Block quotes
------------

```md
Normal paragraph

> Block quote
>
> > Nested block quote, needs empty lines (with caret) before and after it
>
> Back to first block quote
```

Normal paragraph

> Block quote
>
> > Nested block quote, needs empty lines (with caret) before and after it
>
> Back to first block quote

Lists
-----

```md
Create lists with `+`, `-`, or `*`. Indent sub-lists with two spaces.

* List item
  * Nested list
* Back to first list

Create numbered lists with numbers. You can give a number to each one, or just use `1` for all of them and it will auto-number.

1. List item
2. Second item
3. Third item

1. Second list
1. Auto-numbering
```

Create lists with `+`, `-`, or `*`. Indent sub-lists with two spaces.

* List item
  * Nested list
* Back to first list

Create numbered lists with numbers. You can give a number to each one, or just use `1` for all of them and it will auto-number.

1. List item
2. Second item
3. Third item

1. Second list
1. Auto-numbering

Code
----

````md
Inline code: `code`

Block code:
```
code
```
Or indent with four spaces:

    code

Syntax highlighting:

``` js
var four = 2 + 2;
```

If you need to use three back-ticks in your code, use four or more for the code block.
````

Inline code: `code`

Block code:
```
code
```
Or indent with four spaces:

    code

Syntax highlighting:

``` js
var four = 2 + 2;
```

If you need to use three back-ticks in your code, use four or more for the code block.

Tables
------

```
| Title  | Second Title   | Right-aligned | Centered |
| ------ | -------------- | -------------:|:--------:|
| First  | All the text   |             1 |     1    |
| Second | More text      |             2 |     2    |

You can be lazy if it's a simple table and leave out the last pipe.
Aligning the characters are always optional.

| Title  | Second Title
| - | -
| First | All the text
| Second | More text
```

| Title  | Second Title   | Right-aligned | Centered |
| ------ | -------------- | -------------:|:--------:|
| First  | All the text   |             1 |     1    |
| Second | More text      |             2 |     2    |

You can be lazy if it's a simple table and leave out the last pipe. Aligning the characters are always optional.

| Title  | Second Title
| - | -
| First | All the text
| Second | More text

Links
-----

```
Standard syntax:
[link text](http://google.com)

Footnote style syntax:
[link text][google]

Somewhere later in the document, perhaps at the end of the section:

[google]: http://google.com
```

Standard syntax:
[link text](http://google.com)

Footnote style syntax:
[link text][google]

Somewhere later in the document, perhaps at the end of the section:

[google]: http://google.com

Images
------

```
Similar to links but with an exclamation mark in front. The text is used if the image fails to load and for screenreaders and should always be provided. An optional tooltip can also be provided.

Regular image:

![Minion](https://octodex.github.com/images/minion.png)

Image with tooltip:

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Footnote style syntax:

![Stormtroopocat][cat]

Somewhere later in the document:

[cat]: https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat"
```

Similar to links but with an exclamation mark in front. The text is used if the image fails to load and for screenreaders and should always be provided. An optional tooltip can also be provided.

Regular image:

![Minion](https://octodex.github.com/images/minion.png)

Image with tooltip:

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Footnote style syntax:

![Stormtroopocat][cat]

Somewhere later in the document:

[cat]: https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat"

Footnotes
---------

```
Inline footnote^[Text of the footnote].

Paragraph text[^footnote]. More text[^second]. Referencing the first one again[^footnote].

Later in the document:

[^footnote]: Footnote text, you can use whatever *markup* you want.

[^second]: Text of the second footnote.
```

Inline footnote^[Text of the footnote].

Paragraph text[^footnote]. More text[^second]. Referencing the first one again[^footnote].

Later in the document:

[^footnote]: Footnote text, you can use whatever *markup* you want.

[^second]: Text of the second footnote.

Abbreviations
-------------

```
Write your text with abbreviations or acronyms such as HTML, GAAP, or Proc. Then list them later in the document:

*[HTML]: Hyper Text Markup Language
*[GAAP]: Generally Accepted Accounting Principles
*[Proc]: Proceedings
```

Write your text with abbreviations or acronyms such as HTML, GAAP, or Proc. Then list them later in the document:

*[HTML]: Hyper Text Markup Language
*[GAAP]: Generally Accepted Accounting Principles
*[Proc]: Proceedings

Typographic replacements
------------------------

Certain character sequences are replaced with special characters. These are:

```
(c) (C) (r) (R) (tm) (TM) (p) (P)

Plus/minus: +-

Ellipsis: ...

m-dash: text -- more text

Double quotes: "text"

Single quotes: 'text'
```

(c) (C) (r) (R) (tm) (TM) (p) (P)

Plus/minus: +-

Ellipsis: ...

m-dash: text -- more text

Double quotes: "text"

Single quotes: 'text'

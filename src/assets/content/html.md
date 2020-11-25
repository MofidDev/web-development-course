## Hypertext Markup Language

- html layer: the actual content that will be rendered in a web page

- Recall your earlier school days when your teacher returned your homework with red marks on it. Misspelled words, bad grammar, or other such mistakes would be circled or highlighted. You might call that a marked-up document.

- Similarly, a markup language is used to call out parts of the document and provide instructions or background information. The markup is provided to the browser as instructions for how this should be rendered. As such, this markup itself must be syntactically precise.

- HTML5 is a relatively mature standard, or more accurately, a set of standards that is managed by the World Wide Web Consortium (W3C).

## HTML Document

- HTML is generally produced and consumed as a document. We may talk about snippets of HTML but in most cases, a web site will respond to a request with a complete HTML document, which is then parsed by the client and rendered on a device.

- ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>HTML5 Sample Document</title>
    </head>
    <body>
      Hello World!
    </body>
  </html>
  ```

## Elements

- The document is comprised of several HTML elements that are nested in a hierarchical fashion

- Like other markup languages, tags are used to annotate content with useful information

- ```html
  <tag attribute="value" ...> content </tag>
  ```

- In most cases each element has an open and close tag that are identical except the close tag is preceded by a “/” character. Sometimes the terms element and tag are used interchangeably;

- to be precise, however, an element is comprised of an opening and closing tag and the content that is found between these tags.

- Elements will often contain other elements. For better readability, this nested hierarchy is illustrated by indenting child elements.

## DOCTYPE

- The DOCTYPE element is an oddity and doesn’t fit any of the standard element formats. There is a bit of history behind it as well. In the early days of web development (think IE4 and Netscape), web pages were developed against how the current browsers were implemented

- As the HTML specifications evolved and matured, new browsers developed against the updated specifications would not work with the older web pages.

- The DOCTYPE element was introduced so each page could specify the version of the specification that it was written against. The browser would need to interpret this and provide the necessary backward compatibility.

- Fortunately, with HTML5 the DOCTYPE can be essentially ignored. Just set it to html:

- ```html
  <!DOCTYPE html>
  ```

## For further reading

- https://html.spec.whatwg.org/multipage/syntax.html

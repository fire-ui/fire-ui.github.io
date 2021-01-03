---
title: Code
description: Adding and design program code into your website using Fire UI code. 
priority: 10
category: components
keyword: 
    - Fire UI
    - Components
    - Code
---
# Code
To use only Fire UI code feature, copy and paste the stylesheet link into your head element to load Fire UI code CSS.
```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Code/code.min.css">
```
<div class="division">

## How to use

To display inline code, simply use `<code>` tag element in your HTML. Use `<pre>` tag element in your HTML for multiline code.

**NOTE** that you must remember to replace `<` and `>` with `&#x3C;` and `&#x3E;` or it will rendered as HTML.

</div>
<div class="division">

## Example

<div class="my-5">

### `code` tag
`<script>alert("Hello World");</script>`

```
<code>&#x3C;script&#x3E;alert("Hello World");&#x3C;/script&#x3E;</code>
```
</div>
<div class="my-5">

### `pre` tag
<pre>
&#x3C;!-- Fire UI has not released yet --&#x3E;                
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
&#x3C;head&#x3E;
    &#x3C;!-- Required meta tags --&#x3E;
    &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
    &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1&#x22;&#x3E;
    &#x3C;!-- Fire UI CSS --&#x3E;
    &#x3C;link rel=&#x22;stylesheet&#x22; type=&#x22;text/css&#x22; href=&#x22;&#x22;&#x3E;
    &#x3C;!-- Fire UI Javascript --&#x3E;
    &#x3C;script src=&#x22;&#x22;&#x3E;&#x3C;/script&#x3E;
    &#x3C;title&#x3E;Hello, world!&#x3C;/title&#x3E;
&#x3C;/head&#x3E;
&#x3C;body&#x3E;
    &#x3C;h1&#x3E;Hello, world!&#x3C;/h1&#x3E;
&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
</pre>
```
<pre>
&#x3C;!-- Fire UI has not released yet --&#x3E;                
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
&#x3C;head&#x3E;
    &#x3C;!-- Required meta tags --&#x3E;
    &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
    &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1&#x22;&#x3E;
    &#x3C;!-- Fire UI CSS --&#x3E;
    &#x3C;link rel=&#x22;stylesheet&#x22; type=&#x22;text/css&#x22; href=&#x22;&#x22;&#x3E;
    &#x3C;!-- Fire UI Javascript --&#x3E;
    &#x3C;script src=&#x22;&#x22;&#x3E;&#x3C;/script&#x3E;
    &#x3C;title&#x3E;Hello, world!&#x3C;/title&#x3E;
&#x3C;/head&#x3E;
&#x3C;body&#x3E;
    &#x3C;h1&#x3E;Hello, world!&#x3C;/h1&#x3E;
&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
</pre>
```

</div>

</div>
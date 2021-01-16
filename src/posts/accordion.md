---
title: Accordion
description: Show and hide HTML content using Fire UI accordion.
priority: 10
category: components
keyword: 
    - Fire UI
    - Accordion
    - Components
---
# Accordion
Show and hide HTML content by using Fire UI Accordion. To use only Fire UI accordion feature, copy and paste following stylesheet and script tag into your `head` element to load Fire UI accordion CSS and JavaScript.
```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.2.2/src/feature/Accordion/accordion.min.css">
<script src="https://unpkg.com/@fire-ui/fire-ui@0.2.2/src/feature/Accordion/accordion.min.js"></script>
```

<div class="division">

## Example

Click on the "Open section" buttons below to see how accordions work:

<div class="accordion btn btn-dark" data-panel = "Section1">Open section 1</div>
<div class="accordion-panel" id="Section1">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</div>
<div class="accordion btn btn-dark" data-panel = "Section2">Open section 2</div>
<div class="accordion-panel theme-reverse" id="Section2">
    <h3>Form inside accordion</h3>
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Password:</p>
        <input type="password" class="form-control">
    </div>
    <div class="form-group">
        <input type="submit" value="Register" class="form-control theme-adjust">
    </div>
</div>

```
<div class="accordion btn btn-dark" data-panel = "Section1">Open section 1</div>
<div class="accordion-panel" id="Section1">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</div>
<div class="accordion btn btn-dark" data-panel = "Section2">Open section 2</div>
<div class="accordion-panel theme-reverse" id="Section2">
    <h3>Form inside accordion</h3>
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Password:</p>
        <input type="password" class="form-control">
    </div>
    <div class="form-group">
        <input type="submit" value="Register" class="form-control theme-adjust">
    </div>
</div>      
```

</div>
<div class="division">

## `accordion` class
`accordion` class actually act as a "button" for its panel.

</div>
<div class="division">

## `accordion-panel` class
Content for an accordion is stored in `accordion-panel` class.

</div>
---
title: Navigation bar
description: Start navigate your user into a specific page or section using Fire UI navbar.
priority: 10
category: components
keyword: 
    - Fire UI
    - Components
    - Navigation bar
    - Navbar
    - Topnav
    - Sidenav
---

# Navigation bar

Start navigate your user into a specific page or section using Fire UI navbar. To use only Fire UI navbar feature, copy and paste these stylesheet and script tag into your `head` element to load Fire UI navbar CSS and JS.

```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Navigation_Bar/navbar.min.css">
<script src="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Navigation_Bar/navbar.min.js"></script>
```
<div class="division">

## Top navbar
<div class="my-4">

### Example
Example of topnav with all classess available combined together:
<div class="topnav theme-reverse topnav-shadow">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "myTopnav">&#x2630;</span>
    <div class="topnav-right" id="myTopnav">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>

```
<div class="topnav theme-reverse topnav-shadow">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "myTopnav">&#x2630;</span>
    <div class="topnav-right" id="myTopnav">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>
```

</div>
<div class="my-4">

### Topnav Shadow
`topnav-shadow` class provides shading for topnav. Differences between `topnav` with `topnav-shadow` and without `topnav-shadow` class:

#### Without shadow:

<div class="topnav theme-reverse">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "withoutShadow">&#x2630;</span>
    <div class="topnav-right" id="withoutShadow">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>

#### With shadow:

```
<div class="topnav theme-reverse">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "withoutShadow">&#x2630;</span>
    <div class="topnav-right" id="withoutShadow">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>
```

<div class="topnav theme-reverse topnav-shadow">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "withShadow">&#x2630;</span>
    <div class="topnav-right" id="withShadow">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>

```
<div class="topnav theme-reverse topnav-shadow">
    <span class="topnav-brand">Navbar</span>
    <span class="topnav-hamburger-menu" data-target = "myTopnav">&#x2630;</span>
    <div class="topnav-right" id="myTopnav">
        <a class="topnav-item" href="#">Home Page</a>
        <a class="topnav-item" href="#">Features</a>
        <a class="topnav-item" href="#">Pricing</a>
    </div>
</div>
```
</div>
<div class="my-4">

### Topnav hamburger menu
Make your topnav mobile responsive by using `topnav-hamburger-menu` class. Note that in `topnav-hamburger-menu` element, you should add `data-target` attribute with value of topnav menu id (you can see above example). NB: HTML enitity of hamburger icon is `&#x2630;`

### Topnav right
Use `topnav-right` to align `topnav-item` to right

### Topnav brand
Use this `topnav-brand` class to name your brnad inside your topnav.

</div>

</div>
<div class="division">

## Fixed sidenav
An alternative of `topnav` class. `fixed-sidenav` class is a auto responsive class (fixed-sidenav will appear in the top of the page in mobile context while appear in left side in desktop context). Note that this documentation page you are viewing is using `fixed-sidenav` class. To use this class, simply use `fixed-sidenav` class.

**IMPORTANT**: use `main-page` class to your main page if you use `fixed-sidenav` class as your navigation bar, otherwise, your fixed-sidenav your main page.
 
<div class="my-4">

### Example:
This is the code for fixed sidenav of documentation page you are viewing
```
<div class="fixed-sidenav theme-reverse">
    <a class="fixed-sidenav-item sidenav-title" href="../index.html">Fire UI</a>
    <span class="fixed-sidenav-dropdown-btn" data-dropdown = "gettingStarted">Getting Started <span class="dropdown-icon"></span></span>
    <div class="fixed-sidenav-dropdown-content" id="gettingStarted">
        <a class="fixed-sidenav-item" href="../getting-started/introduction.html">Introduction</a>
        <a class="fixed-sidenav-item" href="../getting-started/download.html">Download</a>
        <a class="fixed-sidenav-item" href="../getting-started/customize.html">Customize</a>
    </div>
    <span class="fixed-sidenav-dropdown-btn" data-dropdown="layout">Layout <span class="dropdown-icon"></span></span>
    <div class="fixed-sidenav-dropdown-content" id="layout">
        <a href="../Layout/container.html" class="fixed-sidenav-item">Container</a>
        <a href="../Layout/grid.html" class="fixed-sidenav-item">Grid</a>
    </div>
    <span class="fixed-sidenav-dropdown-btn" data-dropdown="component">Components <span class="dropdown-icon"></span></span>
    <div class="fixed-sidenav-dropdown-content fixed-sidenav-dropdown-active" id="component">
        <a href="../components/box.html" class="fixed-sidenav-item">Box</a>
        <a href="../components/buttons.html" class="fixed-sidenav-item">Buttons</a>
        <a href="../components/code.html" class="fixed-sidenav-item">Code</a>
        <a href="../components/color_theme.html" class="fixed-sidenav-item">Color and theme</a>
        <a href="../components/form.html" class="fixed-sidenav-item">Form</a>
        <a href="../components/modal.html" class="fixed-sidenav-item">Modal</a>
        <a href="../components/navbar.html" class="fixed-sidenav-item">Navigation bar</a>
        <a href="../components/table.html" class="fixed-sidenav-item">Table</a>
        <a href="../components/tabs.html" class="fixed-sidenav-item">Tabs</a>
        <a href="../components/tooltip.html" class="fixed-sidenav-item">Tooltip</a>
    </div>
</div>
```
</div>
<div class="my-4">

### Dropdown icon
Fire UI provides `dropdown-icon` icon for dropdown button, to use it, simply create a `span` attribute with `dropdown-icon` class.

</div>
<div class="my-4">

### Fixed sidenav dropdown button
To use it, add `fixed-sidenav-dropdown-btn` class and `data-dropdown` attribute wih value of dropdown content id.

</div>
<div class="my-4">

### Fixed sidenav dropdown content
To use it, add `fixed-sidenav-dropdown-content` class. It will not displayed as default. To make it displayed on render, add `fixed-sidenav-dropdown-active` class.

</div>

</div>
<div class="divison">

## Sidenav
The difference between `sidenav` and `fixed-sidenav` is that `sidenav` will only be displayd when a button is clicked and it will hover page.

### Example
<div class="sidenav theme-adjust" id="sidenav-example">
    <div class="sidenav-content">
        <span class="sidenav-close-btn" data-target="sidenav-example">&times;</span>
        <h1 class="sidenav-title">Hello World</h1>
        <a href="#" class="sidenav-item">Main page</a>
        <a href="#" class="sidenav-item">Pricing</a>
        <a href="#" class="sidenav-item">Features</a>
    </div>
</div>
<button class="btn theme-reverse sidenav-menu-btn" data-target="sidenav-example">Click to open sidenav</button>

```
<div class="sidenav theme-adjust" id="sidenav-example">
    <div class="sidenav-content">
        <span class="sidenav-close-btn" data-target="sidenav-example">&times;</span>
        <h1 class="sidenav-title">Hello World</h1>
        <a href="#" class="sidenav-item">Main page</a>
        <a href="#" class="sidenav-item">Pricing</a>
        <a href="#" class="sidenav-item">Features</a>
    </div>
</div>
<button class="btn theme-reverse sidenav-menu-btn" data-target="sidenav-example">Click to open sidenav</button>
```

</div>
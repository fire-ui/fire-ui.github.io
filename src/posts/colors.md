---
title: Colors and theme
description: Fire UI provides some basic colors and Fire UI supports night theme. 
priority: 10
category: components
keyword: 
    - Fire UI
    - Components
    - Color
    - Theme
---

# Colors and theme
Fire UI provides some basic colors and Fire UI supports night theme. To use only Fire UI color and theme features, copy and paste this stylesheet and style tag into your `head` element to load Fire UI color and theme CSS and JS.

```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Colors_and_Theme/color.min.css">
<script src="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Colors_and_Theme/color.min.js"></script>
```

<div class="division">

## Theme
Fire UI support multiple theme. To use this inside your webite, add `data-theme` attribute to body tag, with value the default theme. For example, `<body data-theme = "dark"` will make your website in dark mode as default. To switch theme in your website, add a `data-switch-theme` attribute into an element , it will switch theme between dark and light as default. To customize it, add value of theme, with comma splitted as value of `data-switch-theme` attribute. For example, if you wish, your website to have 3 themes such as light, dark and aqua theme, add `data-switch-theme="light, dark, comma" attribute into an element.

Current theme available:
- light
- dark
- aqua

### Example:
You can switch theme of this website by clicking <u data-switch-theme="light, dark, aqua">here</u> and <button data-switch-theme="light, dark, aqua" class="theme-reverse btn">Here</button>

```
You can switch theme of this website by clicking <u data-switch-theme="light, dark, aqua">here</u> and <button data-switch-theme="light, dark, aqua" class="theme-reverse btn">Here</button>
```

</div>
<div class="division">

## Colors
Note that you can customize colors. For more information, read <a href = "./customize" class="link">Customization</a>

### Text color classes:
<ul>
    <li class="black-text">black-text</li>
    <li class="white-text">white-text</li>
    <li class="blue-text">blue-text</li>
    <li class="red-text">red-text</li>
    <li class="yellow-text">yellow-text</li>
    <li class="green-text">green-text</li>
    <li class="purple-text">purple-text</li>
</ul>

### Special classes:
<ul>
    <li class="theme-adjust">theme-adjust (This class background color and color will adjust from page theme, click <u data-switch-theme="light, dark, aqua">here</u> to change theme)</li>
    <li class="theme-reverse">theme-reverse (This class background color and color will reverse from page theme, click <u data-switch-theme="light, dark, aqua">here</u> to change theme)</li>
</ul>

### Background color classes:
<ul>
    <li><div class="box dark-background white-text">dark-background</div></li>
    <li><div class="box light-background black-text">light-background</div></li>
    <li><div class="box black-background white-text">black-background</div></li>
    <li><div class="box white-background black-text">white-background</div></li>
    <li><div class="box blue-background">blue-background</div></li>
    <li><div class="box red-background">red-background</div></li>
    <li><div class="box yellow-background">yellow-background</div></li>
    <li><div class="box green-background">green-background</div></li>
    <li><div class="box purple-background">purple-background</div></li>
</ul>
</div>
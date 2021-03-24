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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.5/src/feature/Colors_and_Theme/color.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.5/src/feature/Colors_and_Theme/color.min.js"></script>
```

<div class="division">

## Theme
Fire UI support multiple theme. To use this inside your webite, add `data-theme` attribute to body tag, with value the default theme. For example, `<body data-theme = "dark"` will make your website in dark mode as default. To switch theme in your website, add a `data-switch-theme` attribute into an element , it will switch theme between dark and light as default. To customize it, add value of theme, with comma splitted as value of `data-switch-theme` attribute. For example, if you wish, your website to have 3 themes such as light, dark and aqua theme, add `data-switch-theme="light, dark, comma" attribute into an element.

Current theme available:
- light
- dark
- aqua
- sky
- phoenix
- indigo
- teal

### Disable changing theme
You can disable theme of the website changing by adding `data-disable-switching-theme="true"` attribute into your `body` tag.

### Example:
You can switch theme of this website by clicking <u data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal">here</u> and <button data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal" class="theme-reverse btn">Here</button>

```
You can switch theme of this website by clicking <u data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal">here</u> and <button data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal" class="theme-reverse btn">Here</button>
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
    <li class="yellow-text">yellow-text</li>
    <li class="green-text">green-text</li>
    <li class="aqua-text">aqua-text</li>
    <li class="phoenix-text">phoenix-text</li>
    <li class="sky-text">sky-text</li>
    <li class="indigo-text">indigo-text</li>
    <li class="teal-text">teal-text</li>
</ul>

### Gradient text:
<ul>
    <li class="violet-gradient-text">violet-gradient-text violet-gradient-text violet-gradient-text violet-gradient-text violet-gradient-text violet-gradient-text</li>
    <li class="teal-gradient-text">teal-gradient-text teal-gradient-text teal-gradient-text teal-gradient-text teal-gradient-text teal-gradient-text</li>
    <li class="gold-gradient-text">gold-gradient-text gold-gradient-text gold-gradient-text gold-gradient-text gold-gradient-text gold-gradient-text</li>
    <li class="emerald-gradient-text">emerald-gradient-text emerald-gradient-text emerald-gradient-text emerald-gradient-text emerald-gradient-text emerald-gradient-text</li>
    <li class="winter-neva-gradient-text">winter-neva-gradient-text winter-neva-gradient-text winter-neva-gradient-text winter-neva-gradient-text winter-neva-gradient-text</li>
    <li class="premium-dark-gradient-text">premium-dark-gradient-text premium-dark-gradient-text premium-dark-gradient-text premium-dark-gradient-text premium-dark-gradient-text</li>
    <li class="everlasting-sky-gradient-text">everlasting-sky-gradient-text everlasting-sky-gradient-text everlasting-sky-gradient-text everlasting-sky-gradient-text</li>
    <li class="nega-gradient-text">nega-gradient-text nega-gradient-text nega-gradient-text nega-gradient-text nega-gradient-text nega-gradient-text</li>
    <li class="mauve-gradient-text">mauve-gradient-text mauve-gradient-text mauve-gradient-text mauve-gradient-text mauve-gradient-text mauve-gradient-text</li>
    <li class="virgin-america-gradient-text">virgin-america-gradient-text virgin-america-gradient-text virgin-america-gradient-text virgin-america-gradient-text</li>
    <li class="endless-river-gradient-text">endless-river-gradient-text endless-river-gradient-text endless-river-gradient-text endless-river-gradient-text</li>
    <li class="celestial-gradient-text">celestial-gradient-text celestial-gradient-text celestial-gradient-text celestial-gradient-text celestial-gradient-text</li>
    <li class="royal-gradient-text">royal-gradient-text royal-gradient-text royal-gradient-text royal-gradient-text royal-gradient-text royal-gradient-text</li>
</ul>

### Special classes:
<ul>
    <li class="theme-adjust">theme-adjust (This class background color and color will adjust from page theme, click <u data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal">here</u> to change theme)</li>
    <li class="theme-reverse">theme-reverse (This class background color and color will reverse from page theme, click <u data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal">here</u> to change theme)</li>
</ul>

### Background color classes:
<ul>
    <li><div class="box dark-background white-text">dark-background</div></li>
    <li><div class="box light-background black-text">light-background</div></li>
    <li><div class="box black-background white-text">black-background</div></li>
    <li><div class="box white-background black-text">white-background</div></li>
    <li><div class="box blue-background">blue-background</div></li>
    <li><div class="box yellow-background">yellow-background</div></li>
    <li><div class="box green-background">green-background</div></li>
    <li><div class="box aqua-background">aqua-background</div></li>
    <li><div class="box phoenix-background">phoenix-background</div></li>
    <li><div class="box sky-background">sky-background</div></li>
    <li><div class="box indigo-background">indigo-background</div></li>
    <li><div class="box teal-background">teal-background</div></li>
</ul>
</div>
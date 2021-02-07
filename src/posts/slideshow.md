---
title: Slideshow
description: Need a collection of images without wasting your pages and time? Slideshow is here for you! 
priority: 10
category: components
keyword: 
    - Fire UI
    - Component
    - Slideshow
---


# Slideshow
Need a collection of images without wasting your pages and time? Slideshow is here for you! To use only Fire UI Slideshow feature, copy and paste these stylesheet and script tag into your `head` element to load Fire UI navbar CSS and JS.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.3/src/feature/Slideshow/slideshow.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.3/src/feature/Slideshow/slideshow.min.js"></script>
```

<div class="division">

## Slideshow
### Example
Example of slideshow with all classes available combine together:
<div class="slideshow-container">
    <div class="slideshow">
        <img src="https://miro.medium.com/max/700/1*o8tTGo3vsocTKnCUyz0wHA.jpeg">
        <span class="slideshow-caption">Caption One</span>
    </div>
    <div class="slideshow slideshow-none">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg">
        <span class="slideshow-caption">Caption Two</span>
    </div>
    <div class="slideshow slideshow-none">
        <img src="https://wallpaperaccess.com/full/235804.jpg">
        <span class="slideshow-caption">Caption Three</span>
    </div>
    <a class="slideshow-prevBtn" onclick="btnSlide(-1)">&#10094;</a>
    <a class="slideshow-nextBtn" onclick="btnSlide(1)">&#10095;</a>
</div>
<br>
<div class="slideshow-info">
    <span class="slideshow-dot" onclick="currentSlide(1)"></span>
    <span class="slideshow-dot" onclick="currentSlide(2)"></span>
    <span class="slideshow-dot" onclick="currentSlide(3)"></span>
</div>

```
<div class="slideshow-container">
    <div class="slideshow">
        <img src="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg">
        <span class="slideshow-caption">Caption One</span>
    </div>

    <div class="slideshow slideshow-none">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg">
        <span class="slideshow-caption">Caption Two</span>
    </div>

    <div class="slideshow slideshow-none">
        <img src="https://wallpaperaccess.com/full/235804.jpg">
        <span class="slideshow-caption">Caption Three</span>
    </div>

    <a class="slideshow-prevBtn" onclick="btnSlide(-1)">&#10094;</a>
    <a class="slideshow-nextBtn" onclick="btnSlide(1)">&#10095;</a>
</div>
<br>

<div class="slideshow-info">
    <span class="slideshow-dot" onclick="currentSlide(1)"></span>
    <span class="slideshow-dot" onclick="currentSlide(2)"></span>
    <span class="slideshow-dot" onclick="currentSlide(3)"></span>
</div>
```

Note: Need to know that you should put `slideshow-none` class after the slideshow class EXCEPT the first image.

</div>
---
title: Marquee
priority: 10
category: components
description: Start using Fire-UI Marquee to animate your text easily with easy configuration!
    - Fire UI
    - Components
    - Marquee
---
# Marquee
Start using Fire-UI Marquee to animate your text easily without any diificult configuration!
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.4/src/feature/Marquee/marquee.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.4/src/feature/Marquee/marquee.min.js"></script>
```

<div class="division">

## Marquee-like animation by Fire UI

### Example
<div class="box">
    <div class="marquee">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "5">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "4" data-direction="down">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "3" data-direction="right">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "6" data-direction="up">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
</div>

```
<div class="box">
    <div class="marquee">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "5">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "4" data-direction="down">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "3" data-direction="right">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
    <div class="marquee" data-speed = "6" data-direction="up">
        <div class="marquee-content">
            <span>Marquee</span>
        </div>
    </div>
</div>
```

### Explanation:
Direction of the marquee is written as value of `data-direction` attribute. There are 4 directions available, "right", "left"(default), "up" and "down", While the speed of the marquee is written as value of `data-speed` attribute which is an integer.

</div>

## Marquee tag
Although using marquee tag is still working on some browsers, it has been deprecated in HTML5, which means some browsers don't longer support it (Indeed, maybe your browser you are using also doesn't support it). Hence, we suggest to use above Marquee animation instead.

<div class="division">

### Example
<div class="box">
    <marquee>Hello World</marquee>
    <marquee direction="right">Hello World</marquee>
</div>

```
<marquee>Hello World</marquee>
<marquee direction="right">Hello World</marquee>
```

</div>

<div class="division">

### Marquee Variation
Fire-UI's Marquee also support `data-speed` for marquee scrollamount speed. Marquee Scrollamount speed's default is 10. You can configure them using `data-speed` inside marquee parameter

<div class="box">
    <marquee>Normal Marquee</marquee>
    <marquee data-speed="15">Faster Marquee</marquee>
    <marquee data-speed="5">Slower Marquee</marquee>
</div>

```
<marquee data-speed="15">Faster Marquee</marquee>
<marquee data-speed="5">Slower Marquee</marquee>
```

</div>
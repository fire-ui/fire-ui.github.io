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
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Tooltip/marquee.min.css">
```
```
<script src="https://unpkg.com/@fire-ui/fire-ui@0.2.0/src/feature/Marquee/marquee.min.js"></script>
```
<div class="division">

## Example
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

## Marquee Variation
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
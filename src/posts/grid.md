---
title: Grid system
priority: 10
category: layout
description: Powerful, mobile-first, twelve columns grid system.
keywords: 
    - Fire UI
    - Layout
    - Grid system
---

# Grid system
Start using our powerful, mobile-first, twelve columns grid system. To use only Fire UI grid system feature, copy and paste this stylesheet link into your head element to load Fire UI grid system CSS.
```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.2.2/src/feature/Grid_System/grid_system.min.css">
```

<div class="division">

## Example
<div class="row">
    <div class="col-ex-3">One of four columns</div>
    <div class="col-ex-3">One of four columns</div>
    <div class="col-ex-3">One of four columns</div>
    <div class="col-ex-3">One of four columns</div>
</div>

```
<div class="container">
    <div class="row">
        <div class="col-ex-3">One of four columns</div>
        <div class="col-ex-3">One of four columns</div>
        <div class="col-ex-3">One of four columns</div>
        <div class="col-ex-3">One of four columns</div>
    </div>
</div>
```

The above example creates four equal-width columns accross all devices and viewport using our predefined grid classes. Those columns are centered in the page with the parent `container` class

</div>
<div class="division">

## Our Grid System
Fire UI's grid system comes with `row`, `col-` and `col-ex-` classes. This is how it's work:
- **A row contains of 12 columns**. These columns allow you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., `col-3` spans 3 columns)
- **`col-` class.** This column class will automatically resize it size when it meets smaller screen. For example, `col-3` class which is supposed to span 3 columns, will span 6 column(half of the width) when screen width is lower than 768 px and will take span 12 columns when screen width is lower than 600px. Example:
    <div class="row">
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
    </div>

    ```
    <div class="row">
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
        <div class="col-3">One of four columns</div>
    </div>
    ```

    To view this differents, open developer console and try resize your screen width
- **`col-ex-` class.** Unlike `col-` class which automatically resize, this `col-ex` will not increase number of column to span. For instance, `col-ex-4` will span 4 columns regardless screen width.
Example of comb

</div>
<div class="division">

## Example of Combinations
<div class="row">
    <div class="col-ex-8">col-ex-8</div>
    <div class="col-ex-4">col-ex-4</div>
</div>
<div class="row">
    <div class="col-ex-4">col-ex-4</div>
    <div class="col-ex-4">col-ex-4</div>
    <div class="col-ex-4">col-ex-4</div>
</div>
<div class="row">
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
</div>

```
<div class="row">
    <div class="col-ex-8">col-ex-8</div>
    <div class="col-ex-4">col-ex-4</div>
</div>
<div class="row">
    <div class="col-ex-4">col-ex-4</div>
    <div class="col-ex-4">col-ex-4</div>
    <div class="col-ex-4">col-ex-4</div>
</div>
<div class="row">
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
    <div class="col-ex-3">col-ex-3</div>
</div>
```

</div>
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.6/src/feature/Grid_System/grid_system.min.css">
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

## Masonry grid
Maonry is a grid layout based on columns like what pinterest website does.

### Example

<div class="masonry">
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
        <p>Pellentesque placerat feugiat orci, ac fermentum dui porta non. Aenean sodales elit lacus, bibendum rutrum orci elementum euismod.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
        <p>Pellentesque placerat feugiat orci, ac fermentum dui porta non. Aenean sodales elit lacus, bibendum rutrum orci elementum euismod.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat.</p>
    </div>
</div>

```
<div class="masonry">
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
        <p>Pellentesque placerat feugiat orci, ac fermentum dui porta non. Aenean sodales elit lacus, bibendum rutrum orci elementum euismod.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat. Donec in enim nisl. Morbi vehicula erat tincidunt neque aliquet molestie. Quisque facilisis semper hendrerit. Nulla facilisi. Aenean vehicula eleifend placerat.</p>
        <p>Pellentesque placerat feugiat orci, ac fermentum dui porta non. Aenean sodales elit lacus, bibendum rutrum orci elementum euismod.</p>
    </div>
    <div class="masonry-item theme-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, elementum eu pulvinar eget, placerat et sapien. Donec sed sollicitudin arcu. Donec iaculis ex sit amet ligula sodales, sed auctor dolor facilisis. Pellentesque semper felis vitae egestas condimentum. Donec ac libero at ligula lacinia aliquam nec sed elit. Vivamus est arcu, feugiat ac enim sit amet, ornare egestas diam. Nullam tempus dignissim tortor ut euismod. Suspendisse sed felis ac erat fringilla volutpat.</p>
    </div>
</div>
```

</div>
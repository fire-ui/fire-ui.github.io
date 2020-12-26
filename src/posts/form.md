---
title: Form
description: Add form into your web page using Fire UI form feature.
priority: 10
category: components
keyword: 
    - Fire UI
    - Components
    - Form
---

# Form
To use only Fire UI form feature, copy and paste this stylesheet link into your `head` element to load Fire UI Form CSS.
```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.1.1/src/feature/Form/form.min.css">
```

<div class="division">

## Form Control
Give your input and textarea custom styles, styling and more with `form-control` class.
### Example
<input type="text" class="form-control" placeholder="Input text using form-control class">
<textarea class="form-control" placeholder="Textarea using form-control class"></textarea>

```
<input type="text" class="form-control" placeholder="Input text using form-control class">
<textarea class="form-control" placeholder="Textarea using form-control class"></textarea>
```
</div>
<div class="division">

## Form Label
Give your input a styled lable.
### Example
<div class="box">
    <p class="form-label">Username:</p>
    <input type="text" class="form-control">
</div>

</div>
<div class="division">

## Form Group
Grouping your inputs into `form-group`
### Example
<div class="box theme-reverse">
    <div class="form-group">
        <p class="form-label">Email address:</p>
        <input type="email" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Password:</p>
        <input type="password" class="form-control">
    </div>
    <div class="form-group">
        <input type="submit" class="btn form-control theme-adjust">
    </div>
</div>

```
<div class="box theme-reverse">
    <div class="form-group">
        <p class="form-label">Email address:</p>
        <input type="email" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <p class="form-label">Password:</p>
        <input type="password" class="form-control">
    </div>
    <div class="form-group">
        <input type="submit" class="btn form-control theme-adjust">
    </div>
</div>
```

</div>
<div class="division">

## Form Grid
You can combine form with the Fire UI <a href="./grid" class="link">Grid system</a> too!
### Example
<div class="box theme-reverse">
    <div class="row">
        <div class="col-ex-7"><input type="text" class="form-control" placeholder="First name"></div>
        <div class="col-ex-5"><input type="text" class="form-control" placeholder="Last name"></div>
    </div>
</div>

```
<div class="box theme-reverse">
    <div class="row">
        <div class="col-ex-7"><input type="text" class="form-control" placeholder="First name"></div>
        <div class="col-ex-5"><input type="text" class="form-control" placeholder="Last name"></div>
    </div>
</div>
```

</div>
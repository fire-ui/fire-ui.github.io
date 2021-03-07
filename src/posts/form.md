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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.5/src/feature/Form/form.min.css">
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

## Form input animation
To use form input animation, add `form-animate` class in the same element as [`form-group`](#form-group) and add `input-animate` class in your input and don't forget add a `span` element with `input-onFocus` class on it.
<div class="box theme-reverse">
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="input-animate">
    </div>
    <div class="form-group">
        <p class="form-label">Email address:</p>
        <input type="email" class="input-animate">
    </div>
</div>

```
<div class="box theme-reverse">
    <div class="form-group">
        <p class="form-label">Username:</p>
        <input type="text" class="input-animate">
    </div>
    <div class="form-group">
        <p class="form-label">Email address:</p>
        <input type="email" class="input-animate">
    </div>
</div>
```

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
        <p class="form-label">Hobby</p>
        <div>
            <input type="checkbox" id="cycling">
            <label for="cycling">Cycling</label>
        </div>
        <div>
            <input type="checkbox" id="dancing">
            <label for="dancing">Dancing</label>
        </div>
    </div>
    <div class="form-group">
        <p class="form-label">Yes or no?</p>
        <div>
            <input type = "radio" id="yes" name="yesorno">
            <label for = "yes">Yes</label>
        </div>
        <div>
            <input type = "radio" id="no" name="yesorno">
            <label for = "no">No</label>
        </div>
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
        <p class="form-label">Hobby</p>
        <div>
            <input type="checkbox" id="cycling">
            <label for="cycling">Cycling</label>
        </div>
        <div>
            <input type="checkbox" id="dancing">
            <label for="dancing">Dancing</label>
        </div>
    </div>
    <div class="form-group">
        <p class="form-label">Yes or no?</p>
        <div>
            <input type = "radio" id="yes" name="yesorno">
            <label for = "yes">Yes</label>
        </div>
        <div>
            <input type = "radio" id="no" name="yesorno">
            <label for = "no">No</label>
        </div>
    </div>
    <div class="form-group">
        <input type="submit" class="btn form-control theme-adjust">
    </div>
</div>
```

</div>
<div class="division">

## Toggle switch
A checkbox based toggle switch input. To use this, create a `div` element with `toggle-switch` and inside it, create an input checkbox with a unique id. **Note**: You should give input checkbox with a unique id

### Example:
<div class="toggle-switch">
    <input type="checkbox" name="hello" id="hi">
</div>

```
<div class="toggle-switch">
    <input type="checkbox" name="hello" id="hi">
</div>
```


</div>
<div class="division">

## Textarea auto adjust

Auto adjust your textarea height according to user's input by using `textarea-auto-adjust` class.
### Example
<textarea class="textarea-auto-adjust form-control"></textarea>

```
<textarea class="textarea-auto-adjust form-control"></textarea>
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
<div class="division">

## Checkbox
Fire UI provides default Checkbox style

<div class="box theme-reverse">
    <div class="form-group">
        <div>
            <input type = 'checkbox' id="myCheckbox">
            <label for = "myCheckbox">My checkbox</label>
        </div>
        <div>
            <input type = 'checkbox' id="anotherCheckbox">
            <label for = "anotherCheckbox">another checkbox</label>
        </div>
    </div>
</div>

```
<div class="box theme-reverse">
    <div class="form-group">
        <div>
            <input type = 'checkbox' id="myCheckbox">
            <label for = "myCheckbox">My checkbox</label>
        </div>
        <div>
            <input type = 'checkbox' id="anotherCheckbox">
            <label for = "anotherCheckbox">another checkbox</label>
        </div>
    </div>
</div>
```

</div>
<div class="division">

## Radio button
Beside checkbox, Fire UI also provide default style to radio button
<div class="box theme-reverse">
    <div class="form-group">
        <div>
            <input type = 'radio' id="myRadioButton" name="radioButton">
            <label for = "myRadioButton">My radio button</label>
        </div>
        <div>
            <input type = 'radio' id="anotherRadioButton" name="radioButton">
            <label for = "anotherRadioButton">another radio button</label>
        </div>
    </div>
</div>

```
<div class="box theme-reverse">
    <div class="form-group">
        <div>
            <input type = 'radio' id="myRadioButton" name="radioButton">
            <label for = "myRadioButton">My radio button</label>
        </div>
        <div>
            <input type = 'radio' id="anotherRadioButton" name="radioButton">
            <label for = "anotherRadioButton">another radio button</label>
        </div>
    </div>
</div>
```

</div>
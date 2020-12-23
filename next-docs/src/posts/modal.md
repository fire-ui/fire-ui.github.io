---
title: Modal
description: Create dialogs to your site, user notifications and others using Fire UI modal.
priority: 10
category: components
keyword: 
    - Fire UI
    - Components
    - Modal
---

# Modal
Use Fire UI modal plugin to create dialogs to your site, user notifications and others. To use only Fire UI modal feature, copy and paste these stylesheet and script tag into your `head` element to load Fire UI modal CSS and JS.
```
<link rel="stylesheet" href="https://unpkg.com/@fire-ui/fire-ui@0.1.1/src/feature/Modal/modal.min.css">
<script src="https://unpkg.com/@fire-ui/fire-ui@0.1.1/src/feature/Modal/modal.min.js"></script>
```
<div class="division">

## Example
<button class="btn theme-reverse" open-modal data-modal="myModal">Click to open modal</button>
<div class="modal" id="myModal">
    <div class="modal-content">
        <span class="modal-close-btn" data-modal="myModal">&times;</span>
        <h1 class="modal-content-title">Hello World</h1>
        <p class="modal-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt ex. Vestibulum condimentum viverra fermentum. 
            Vivamus orci sem, sodales sed lorem ac, consectetur lacinia dui. Mauris non ultrices tortor. Ut venenatis interdum justo, 
            ac euismod tellus finibus a. Pellentesque eget massa non lorem tempor rutrum. 
            Maecenas gravida augue vel elit laoreet finibus. Ut vitae suscipit ligula. Nullam bibendum facilisis dolor, non tempus sapien venenatis in. 
            Aliquam ac nisl at enim volutpat efficitur quis id leo. Proin volutpat nibh ut urna ultrices semper. Donec vehicula ullamcorper dapibus. 
            Proin in ultrices odio. Nam gravida bibendum turpis id rutrum. Pellentesque erat lacus, sagittis bibendum vehicula quis, bibendum a diam.
        </p>
    </div>
</div>

```
<button class="btn theme-reverse" open-modal data-modal="myModal">Click to open modal</button>
<div class="modal" id="myModal">
    <div class="modal-content">
        <span class="modal-close-btn" data-modal="myModal">&times;</span>
        <h1 class="modal-content-title">Hello World</h1>
        <p class="modal-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt ex. Vestibulum condimentum viverra fermentum. 
            Vivamus orci sem, sodales sed lorem ac, consectetur lacinia dui. Mauris non ultrices tortor. Ut venenatis interdum justo, 
            ac euismod tellus finibus a. Pellentesque eget massa non lorem tempor rutrum. 
            Maecenas gravida augue vel elit laoreet finibus. Ut vitae suscipit ligula. Nullam bibendum facilisis dolor, non tempus sapien venenatis in. 
            Aliquam ac nisl at enim volutpat efficitur quis id leo. Proin volutpat nibh ut urna ultrices semper. Donec vehicula ullamcorper dapibus. 
            Proin in ultrices odio. Nam gravida bibendum turpis id rutrum. Pellentesque erat lacus, sagittis bibendum vehicula quis, bibendum a diam.
        </p>
    </div>
</div>
```

</div>
<div class="division">

## Form using Fire UI modal
<button class="btn theme-reverse" open-modal data-modal="formModal">Click to open modal</button>
<div class="modal" id="formModal">
    <div class="modal-content theme-reverse">
        <span class="modal-close-btn" data-modal="formModal">&times;</span>
        <h1 class="modal-content-title">Register user</h1>
        <div class="form-group">
            <p class="form-label">Username:</p>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Email:</p>
            <input type="email" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Password:</p>
            <input type="password" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Password confirmation:</p>
            <input type="password" class="form-control">
        </div>
        <div class="form-group">
            <input type="submit" value="Register" class="btn theme-adjust form-control">
        </div>
    </div>
</div>

```
<button class="btn theme-reverse" open-modal data-modal="formModal">Click to open modal</button>
<div class="modal" id="formModal">
    <div class="modal-content theme-reverse">
        <span class="modal-close-btn" data-modal="formModal">&times;</span>
        <h1 class="modal-content-title">Register user</h1>
        <div class="form-group">
            <p class="form-label">Username:</p>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Email:</p>
            <input type="email" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Password:</p>
            <input type="password" class="form-control">
        </div>
        <div class="form-group">
            <p class="form-label">Password confirmation:</p>
            <input type="password" class="form-control">
        </div>
        <div class="form-group">
            <input type="submit" value="Register" class="btn theme-adjust form-control">
        </div>
    </div>
</div>
```

</div>
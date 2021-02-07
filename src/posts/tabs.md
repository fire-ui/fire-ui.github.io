---
title: Tabs
priority: 10
category: components
description: Use Fire UI tabs to separate content into different panels where each pane is viewable one at a time.
    - Fire UI
    - Components
    - Tabs
---
# Tabs
Use Fire UI tabs to separate content into different panels where each panel is viewable one at a time. To use only Fire UI tab feature, copy and paste these stylesheet and script tag into your `head` element to load Fire UI tab CSS and JS.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.3/src/feature/Tabs/tab.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fire-ui/fire-ui@0.2.3/src/feature/Tabs/tab.min.js"></script>
```
<div class="division">

## Example
<div class="box">
    <div class="tab" data-tab = "exampleTab">
        <button class="tab-btn btn-dark" data-content = "helloWorld">Hello</button>
        <button class="tab-btn btn-light" data-content = "loremIpsum">Lipsum</button>
    </div>
    <div class="tab-contents" id="exampleTab">
        <div id="helloWorld" class="tab-content tab-content-active">
            <h1>Hello World</h1>
            <p>
                Hello World. 
            </p>
        </div>
        <div id="loremIpsum" class="tab-content">
            <h1>Lorem ipsum</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id metus ligula. 
                Ut neque tortor, vulputate ut placerat id, molestie at risus. Curabitur velit augue, facilisis eu nisi et, 
                placerat dapibus dui. Etiam tempor nulla mi, a porta nisl sagittis ut. Aenean ullamcorper maximus nulla, rutrum sodales ligula. 
                Nulla urna dui, efficitur in rutrum a, viverra eu nunc. Ut non rhoncus turpis, at vulputate mauris. Suspendisse et efficitur massa, in aliquam justo.
            </p>
        </div>
    </div>
</div>

```
<div class="box">
    <div class="tab" data-tab = "exampleTab">
        <button class="tab-btn btn-dark" data-content = "helloWorld">Hello</button>
        <button class="tab-btn btn-light" data-content = "loremIpsum">Lipsum</button>
    </div>
    <div class="tab-contents" id="exampleTab">
        <div id="helloWorld" class="tab-content tab-content-active">
            <h1>Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id metus ligula. 
                Ut neque tortor, vulputate ut placerat id, molestie at risus. Curabitur velit augue, facilisis eu nisi et, 
                placerat dapibus dui. Etiam tempor nulla mi, a porta nisl sagittis ut. Aenean ullamcorper maximus nulla, rutrum sodales ligula. 
                Nulla urna dui, efficitur in rutrum a, viverra eu nunc. Ut non rhoncus turpis, at vulputate mauris. Suspendisse et efficitur massa, in aliquam justo.
            </p>
        </div>
        <div id="loremIpsum" class="tab-content">
            <h1>Lorem ipsum</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id metus ligula. 
                Ut neque tortor, vulputate ut placerat id, molestie at risus. Curabitur velit augue, facilisis eu nisi et, 
                placerat dapibus dui. Etiam tempor nulla mi, a porta nisl sagittis ut. Aenean ullamcorper maximus nulla, rutrum sodales ligula. 
                Nulla urna dui, efficitur in rutrum a, viverra eu nunc. Ut non rhoncus turpis, at vulputate mauris. Suspendisse et efficitur massa, in aliquam justo.
            </p>
        </div>
    </div>
</div>
```

</div>
<div class="division">

## Things to note
- `tab-btn` class and `btn` class are differents. Use `tab-btn` class or your tab won't work.
- `data-content` attribute of `tab-btn` tag must have value of it's content id
- `data-tab` attribute of `tab` class element must has value of it's tab contents' id

</div>
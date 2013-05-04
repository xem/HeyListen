Hey! Listen!
============

### WHAT? ###

* Ultra-minimalist loosely-coupled event-based native-looking library-agnostic MVC solution for JavaScript

* Works on IE9+, Firefox 11+, Chrome 15+, Opera 11+, Safari 535+

* Only 200 bytes

* Uses bubbling and cancellable events FWIW

* Totally unrelated with Zelda


### SETUP ###

```html
<script src="HeyListen.js"></script>
```
that's all.


### API ###

```js
// Message emitter
// (details can be any JS object)
hey("eventName", detail)
    
// Message listener
// (the callback accepts one parameter (e) and can access the message's details with "e.detail")
listen("eventname", callback)
```


### DEMO ###

http://xem.github.com/HeyListen
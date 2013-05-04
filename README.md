Hey! Listen!
============

### DEMO ###

http://xem.github.com/HeyListen

* Ultra-minimalist loosely-coupled event-based native-looking MVC solution for JavaScript

* Works on IE9+, Firefox 11+, Chrome 15+, Opera 11+, Safari 535+

* Only 200 bytes

* Uses bubbling and cancellable events

### API ###

```js
// Message emitter
// (details can be any JS object)
hey("eventName", detail)
    
// Message listener
// (the callback accepts one parameter (e) and can access the message's detail with "e.detail")
listen("eventname", callback)
```
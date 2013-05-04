Hey! Listen!
============

### WHAT? ###

Hey! Listen! is:

* A cross-browser solution to generate custom events in JavaScript. It's therefore ideal to manage data exchanges in a MVC architecture, and in many other design patterns.
* Working on IE9+, Firefox 11+, Chrome 15+, Opera 11+, Safari 535+.
* Only 227 bytes.
* Totally unrelated with Zelda.


### SETUP ###

Include the script (or copy its content in your code)

```html
<script src="HeyListen.js"></script>
```


### API ###

The '''window''' object acts as the messenger.

Custom events can be fired from any script with:

    /**
    * @function window.hey
    * @param eventName (string)
    * @param detail (any javascript object - optional - undefined by default)
    * @param bubbles (boolean - optional - true by default)
    * @param cancelable (boolean - optional - true by default)
    */
    window.hey(eventName [, detail [ bubbles, [, cancelable]]])
    

Custom events can be listened or ignored by any other script like this:

    window.addEventListener(eventName, callback);
    window.removeEventListener(eventname, callback);

The callback function can access to the "detail" of the event like this:

    window.removeEventListener(eventname, callback(e){alert(e.detail)});


### DEMO ###

Quick demo representing communications between the three tiers of a MVC architecture:

http://xem.github.com/HeyListen
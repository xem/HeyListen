/** Hey! Liten! **/

/* Send a message (e) */
function hey(e,t){try{t=new CustomEvent(e)}catch(r){t=document.createEvent("Event");t.initEvent(e,true,false)}window.dispatchEvent(t)}

/* Receive a message (e) and execute a callback (f) */
function listen(e,f){window.addEventListener(e,f)}
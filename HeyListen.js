function hey(e,d,t){try{t=new CustomEvent(e,{detail:d})}catch(r){t=document.createEvent("Event");t.initEvent(e,!0,!0);t.detail=d}this.dispatchEvent(t)}
function listen(e,f){this.addEventListener(e,f)}
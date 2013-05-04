function hey(e){
  window.dispatchEvent(new CustomEvent(e));
}

function listen(e,f){
  window.addEventListener(e,f,false);
}
function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,100,event);
  };
}

window.addEventListener("resize",debounce(function(e){
	window.location.reload(false);
}));
var image = document.getElementById('title-img-animated');

image.addEventListener('mousemove', function(evt){
	image.style.backgroundPosition = evt.pageX * -1 / 12 + "px " + evt.pageY * -1 / 12 + "px";
});

image.addEventListener('mouseleave', function(evt) {
	image.style.backgroundPosition = "center center";
});
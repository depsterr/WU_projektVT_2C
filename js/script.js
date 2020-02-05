/* Variables used for calculating percentage */
var winHeight, docHeight, trackLength;

/* Variables used for keeping track of scrolling */
var scrollTop, pctScrolled;
scrollTop = pctScrolled = 0; 
/* Paralax Elements */
var paralax1 = document.getElementsByClassName("paralax1");

/* Returns the height of the document in pixels */
function getDocHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	)
}

/* Gets the size of the document */
function getMeasurments(){
	winHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
	docHeight = getDocHeight();
	trackLength = docHeight - winHeight;
	amountScrolled(); /* After getting new measurments we want to update the scroll */
}


/* Gets the amount scrolled down in the document */
function amountScrolled(){
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    pctScrolled = scrollTop/trackLength * 100;
	/* Update parallax */
	for (var n = 0; n < paralax1.length; n++)
		paralax1[n].style.top = (scrollTop * -0.6 + "px");
	console.log(scrollTop + "px");
}

/* We need to get measurments to be able to calculate the scroll percentage */ 
getMeasurments();

/* Recalculate height etc on resize */
window.addEventListener("resize", function(){
	getMeasurments();
	amountScrolled();
}, false)
 
/* Recalculate scroll on scroll */
window.addEventListener("scroll", function(){
    amountScrolled();
}, false)

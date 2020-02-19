/*
	The purpose of this file is to take URL variables telling the site what product
	is to be viewed and then editing the content of the page accordingly.
*/

const images = document.getElementsByClassName("listimg");
const titles = document.getElementsByClassName("listh");
const desc = document.getElementById("desc");
const desctitle = document.getElementById("desch");

/*
	Get all variables and store in vars variable
	Source: https://html-online.com/articles/get-url-parameters-javascript/ 
*/

var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
});

/*
	Only run if vars are not empty
	Source: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
*/

/*
	Change images and text depending on what product we are viewing
*/

if (!(Object.entries(vars).length === 0 && vars.constructor === Object)) {

	/* Set name and image name */
	var product = vars["product"];
	var productImage = "img/" + vars["prodcut"] + ".png";
	var productDescription = "";
	var productDescriptionTitle = "";

	/* Set the product description */
	switch (product) {
		case "":
			break;
	}

	/* Use js DOM to change info on the site */

	/* All titles */
	for (var n = 0; n < titles.length; n++) {
		titles[n].innerHTML = product;
	}

	/* All images */
	for (var n = 0; n < images.length; n++) {
		images[n].src = productImage;
	}

	desc.innerHTML = productDescription;
	descTitle.innerHTML = productDescriptionTitle;
}

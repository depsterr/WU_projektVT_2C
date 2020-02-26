/*
	The purpose of this file is to take URL variables telling the site what product
	is to be viewed and then editing the content of the page accordingly.
*/

const images = document.getElementsByClassName("listimg");
const titles = document.getElementsByClassName("listh");
const desc = document.getElementById("desc");
const descTitle = document.getElementById("desch");
const buyButton = document.getElementById("buybtn");

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
	var productImage = "img/" + product + ".jpg";
	console.log(productImage);
	var productDescription = "";
	var buyLink = "";

	/* Set the product description */
	switch (product) {
		case "Hoodie":
			productDescription = "This is the finest hoodie you will ever find, made from real elfs.";
			break;
		case "Tee":
			productDescription = "This tee is fancier than a fine steak.";
			break;
		case "Shoes":
			productDescription = "These shoes are better than socks.";
			break;
		case "Pants":
			productDescription = "If you don't buy these I will kill you. You have been warned.";
			break;
		case "Jacket":
			productDescription = "Mans not hot.";
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
		images[n].alt = product + " image";
	}

	desc.innerHTML = productDescription;
	descTitle.innerHTML = product + " description";
}

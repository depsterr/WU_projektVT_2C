/*
	This is a script which is only loaded on the product page.
	It has two main purposes:

	- Loading the proper images and descriptions

	- Adding items to the cart

	The first is done by looking at the url arguments, in this case
	?product=<name> in the url. This script then adjusts the content
	of this page accordingly.

	The second is done by using functions defined in cookies.js to add
	items to a list stored in the cookies. This can then be read on the
	cart page to list the added items.
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
	Change images and text depending on what product we are viewing
*/

/* Define this variable outside so that we can use it later */
var product = ""

if (!(Object.entries(vars).length === 0 && vars.constructor === Object)) {

	/* Set name and image name */
	product = vars["product"];
	var productImage = "img/" + product + ".jpg";
	console.log(productImage);
	var productDescription = "";
	var buyLink = "";

	/* Set the product description */
	switch (product) {
		case "Hoodie":
			productDescription = "This is the finest hoodie you will ever find, made from real elfs. It's the finest piece of art that you will ever find, and if you do not pearchuse it you will be forever cursed";
			break;
		case "Tee":
			productDescription = "This tee is fancier than a fine steak. In fact, it is the finest ";
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

/*
	A function to add the item to the cart and redirect
	to the cart
*/
function
addToCart() {
	AddToCookieList(product);
	window.location.href = "cart.html"
}

/* Make the add to cart button functional */
buyButton.addEventListener("click", addToCart);

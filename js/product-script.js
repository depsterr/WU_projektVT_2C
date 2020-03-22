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
			productDescription = "Maecenas luctus finibus eros in convallis. Duis viverra velit quis lacus euismod, sit amet vulputate purus vulputate. Duis placerat felis a nulla mattis, a tincidunt libero commodo.";
			break;
		case "Tee":
			productDescription = "Donec finibus molestie velit at pharetra. Aenean vel est at turpis vestibulum suscipit. Donec auctor porta massa sit amet pretium. Ut interdum felis eget massa accumsan vestibulum ut ac mi. Suspendisse suscipit erat quis leo finibus, non tincidunt arcu tempor.";
			break;
		case "Shoes":
			productDescription = "Donec tortor ipsum, molestie vel nunc a, posuere eleifend velit. Mauris magna mi, suscipit sit amet urna et, suscipit tempor tellus. Donec et viverra leo. Integer ac orci id magna aliquet viverra. Aliquam elit mi, sagittis vestibulum pharetra a, consequat ac lectus.";
			break;
		case "Pants":
			productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere ac ante aliquam dignissim. Mauris a nunc augue. Donec et elementum magna. Phasellus fermentum, erat at volutpat tempus, nulla mi ultrices dui, ut lacinia ex augue a metus. Pellentesque scelerisque placerat nunc, suscipit congue nunc hendrerit ac.";
			break;
		case "Jacket":
			productDescription = "Donec ante nulla, dapibus nec cursus non, aliquam in quam. Phasellus dictum rutrum enim eget tempus. Mauris mattis orci iaculis neque dignissim elementum. Nam condimentum eros in ex rhoncus ornare. Mauris ac risus dapibus, pretium ex nec, egestas ipsum.";
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

/*
	This is a script which is only loaded on the cart page.
	It provides two functionalities:

	- Loading the items that are added to the cart to the
	page and displaying them.

	- Removing items from the cart.

	This functionality is made possible using cookies and the
	functions defines in cookies.js
*/

/* Cart elements to be hidden or loaded */
var noItem = document.getElementById("no-item")
var shoesItem = document.getElementById("shoes-item")
var jacketItem = document.getElementById("jacket-item")
var teeItem = document.getElementById("tee-item")
var pantsItem = document.getElementById("pants-item")
var hoodieItem = document.getElementById("hoodie-item")
var checkoutButton = document.getElementById("checkout-button")

/* Remove buttons to check for clicks on */
var shoesRemove = document.getElementById("shoes-remove")
var jacketRemove = document.getElementById("jacket-remove")
var teeRemove = document.getElementById("tee-remove")
var pantsRemove = document.getElementById("pants-remove")
var hoodieRemove = document.getElementById("hoodie-remove")


var Items = GetCookieList();

for (x in Items) {
	switch (Items[x]) {
		case "Hoodie":
			hoodieItem.classList.remove("carthide");
			checkoutButton.classList.remove("carthide");
			noItem.classList.add("carthide");
			break;
		case "Tee":
			teeItem.classList.remove("carthide");
			checkoutButton.classList.remove("carthide");
			noItem.classList.add("carthide");
			break;
		case "Shoes":
			shoesItem.classList.remove("carthide");
			checkoutButton.classList.remove("carthide");
			noItem.classList.add("carthide");
			break;
		case "Pants":
			pantsItem.classList.remove("carthide");
			checkoutButton.classList.remove("carthide");
			noItem.classList.add("carthide");
			break;
		case "Jacket":
			jacketItem.classList.remove("carthide");
			checkoutButton.classList.remove("carthide");
			noItem.classList.add("carthide");
			break;
	}
}

/*
	Function that gets called when the remove from cart button
	is pressed.
*/
function
removeFromCart(product) {
	if (product) {
		RemoveFromCookieList(product);
			window.location.reload();
	}
}

/*
	Remove from cart when X icon is pressed
*/

shoesRemove.addEventListener("click", function() { removeFromCart("Shoes") });
jacketRemove.addEventListener("click", function() { removeFromCart("Jacket") });
teeRemove.addEventListener("click", function() { removeFromCart("Tee") });
pantsRemove.addEventListener("click", function() { removeFromCart("Pants") });
hoodieRemove.addEventListener("click", function() { removeFromCart("Hoodie") });

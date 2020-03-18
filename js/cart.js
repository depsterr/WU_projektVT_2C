/*
	This is a script which is only loaded on the cart page.
	It provides two functionalities:

	- Loading the items that are added to the cart to the
	page and displaying them.

	- Removing items from the cart.

	This functionality is made possible using cookies and the
	functions defines in cookies.js
*/

var shoesItem = document.getElementById("shoes-item")
var jacketItem = document.getElementById("jacket-item")
var teeItem = document.getElementById("tee-item")
var pantsItem = document.getElementById("pants-item")
var hoodieItem = document.getElementById("hoodie-item")

var Items = GetCookieList();

for (x in Items) {
	switch (Items[x]) {
		case "Hoodie":
			hoodieItem.classList.remove("carthide");
			break;
		case "Tee":
			teeItem.classList.remove("carthide");
			break;
		case "Shoes":
			shoesItem.classList.remove("carthide");
			break;
		case "Pants":
			pantsItem.classList.remove("carthide");
			break;
		case "Jacket":
			jacketItem.classList.remove("carthide");
			break;
	}
}

/*
	Function that gets called when the remove from cart button
	is pressed.
*/
function
removeFromCart(product) {
	RemoveFromCookieList(product);
	window.location.reload();
}

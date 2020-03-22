/*
	This is a file which contains functions that I've
	written for interacting with browser cookies in
	javascript. The functions written here will be used
	in other scripts to add a cart functionality.
*/

/*
	A function that takes the current cookie for the site
	and returns it parsed as json data. This is used for
	storing javascript data in the cookie.
*/
function
GetCookieList() {
	return JSON.parse(document.cookie);
}

/*
	A function that takes some data, then json encodes it
	and sets the browsers cookie to that.
*/
function
SetCookieList(data) {
	document.cookie = JSON.stringify(data);
}

/*
	A function that takes the list contained in the cookies
	and appends an item if it's not already present in the
	list in the cookies. It then updates the cookie.
*/
function
AddToCookieList(data) {
	list = GetCookieList(); if (!list.includes(data)) {
		list.push(data);
		SetCookieList(list);
	}
}

/*
	A function that loads the list of data from the cookies and
	then checks if it contains an item, if it does it removes
	the said item and then writes the data to the cookie again.
*/
function
RemoveFromCookieList(data) {
	list = GetCookieList();
	if (list.includes(data)) {
		list.splice(list.indexOf(data), 1);
		SetCookieList(list);
	}
}

/*
	If there is no current list loaded in the cookie load an empty
	one. This is important becuase the Add and Remove functions
	would be broken if there were no list to add to in the cookies.
*/
if (!document.cookie) {
	SetCookieList([]);
}

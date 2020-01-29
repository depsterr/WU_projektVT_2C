const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");

function
toggleMenu()
{
	nav.classList.toggle("navActive");
	burger.classList.toggle("toggle");
}

burger.addEventListener("click", toggleMenu);

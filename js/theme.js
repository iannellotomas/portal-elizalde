/*
  THEME CONFIGURATION
*/

const preferences = matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
const switchTheme = document.querySelector("button.switch-theme");

// Set default theme
const setTheme = (theme) => {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
};

localStorage.getItem("theme") === "light"
	? document.querySelector(".theme-light").classList.add("hide")
	: document.querySelector(".theme-dark").classList.add("hide");

switchTheme.addEventListener("click", () => {
	let newTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";

	if (localStorage.getItem("theme") === "light") {
		document.querySelector(".theme-dark").classList.add("hide");
		document.querySelector(".theme-light").classList.remove("hide");
	} else {
		document.querySelector(".theme-light").classList.add("hide");
		document.querySelector(".theme-dark").classList.remove("hide");
	}

	setTheme(newTheme);
});

setTheme(localStorage.getItem("theme") || preferences);
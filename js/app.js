const showPass = document.querySelector(".show-pass");
const inputPassword = document.getElementById("input-pass");

showPass.addEventListener("click", () => {
	showPass.classList.toggle("decrypt");
	inputPassword.type === "password"
		? (inputPassword.type = "text")
		: (inputPassword.type = "password");
});

// Submit data
const form = document.querySelector("form");
const BD = [
	{
		user: "Tonelli",
		pass: "12345",
	},
	{
		user: "Annese",
		pass: "12345",
	},
	{
		user: "Blanco",
		pass: "12345",
	},
];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateUserEntered();
});

function validateUserEntered(e) {
	var userEnter = document.getElementById("input-user").value;
	var passEnter = document.getElementById("input-pass").value;
	const errorNode = document.querySelector("form .error p");
	let alert = "",
		user_found = false;

	if (userEnter === "" || passEnter === "") {
		alert = "Hay campos sin completar";
	} else {
		BD.forEach(({ user, pass }) => {
			if (user === userEnter && pass === passEnter) {
				user_found = true;
			}

			user_found ? loadData() : (alert = "Usuario o contraseña incorrectos");
		});
	}


	if (alert != "") {
		errorNode.textContent = alert;
		errorNode.parentNode.classList.remove("disabled");
	}
}

function loadData() {
	const loadedScreen = document.querySelector('main .loaded');
	loadedScreen.classList.add('ready');
}
function openPlayerConfig() {
	playerConfigOverlayElement.style.display = "block";
	backdropElement.style.display = "block";
}
function closePlayerConfig() {
	playerConfigOverlayElement.style.display = "none";
	backdropElement.style.display = "none";

	formElement.firstElementChild.classList.remove("error");
	errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayername = formData.get("username").trim();

	if (!enteredPlayername) {
		// same as if (enteredPlayername === " ") but written in shorter way
		playerNameInput = document.getElementById("enter-player-name");
		playerNameInput.classList.add("error");
		//event.target.firstElementChid.classList.add("error");
		errorsOutputElement.textContent = "Please enter a valid name!";
		return; //this makes sure no other code is returned if this part of code is run.
	}
}

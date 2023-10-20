function openPlayerConfig(event) {
	const selectedPlayerId = +event.target.dataset.playerid; // '+' converts string to an int
	editedPlayer = selectedPlayerId;
	playerConfigOverlayElement.style.display = "block";
	backdropElement.style.display = "block";
}
function closePlayerConfig() {
	playerConfigOverlayElement.style.display = "none";
	backdropElement.style.display = "none";

	formElement.firstElementChild.classList.remove("error");
	errorsOutputElement.textContent = "";
	formElement.firstChild.lastChild.value = "";
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

	const updatePlayerDataElement = document.getElementById(
		"player-" + editedPlayer + "-data"
	);
	updatePlayerDataElement.children[1].textContent = enteredPlayername;

	// if (editedPlayer === 1){
	//     players[0].name = enteredPlayername
	// }else{
	//     players[1].name = enteredPlayername
	// }
	players[editedPlayer - 1].name = enteredPlayername;

	closePlayerConfig();
}

function startNewGame() {
	if (players[0].name === "" || players[1].name === "") {
		alert("Please set custom player names for both players!");
		return;
	}
	activePlayerNameElement.textContent = players[activePlayer].name;
	gameAreaElement.style.display = "block";
}

function switchPlayer() {
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}
	activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
	const selectedColumn = event.target.dataset.col - 1;
	const selectedRow = event.target.dataset.row - 1;

	if (gameData[selectedRow][selectedColumn] > 0) {
		alert("Please select an empty field!");
		return;
	}

	event.target.textContent = players[activePlayer].symbol;
	event.target.classList.add("disabled");

	gameData[selectedRow][selectedColumn] = activePlayer + 1;

	const winnerId = checkForGameOver();
	console.log(winnerId);

	currentRound++;
	switchPlayer();
}

function checkForGameOver() {
	//Checking rows for equality
	for (let i = 0; i < 3; i++) {
		if (
			gameData[i][0] > 0 &&
			gameData[i][0] === gameData[i][1] &&
			gameData[i][1] === gameData[i][2]
		) {
			return gameData[i][0];
		}
	}

	//checking columns for equality
	for (let i = 0; i < 3; i++) {
		if (
			gameData[0][i] > 0 &&
			gameData[0][i] === gameData[1][i] &&
			gameData[0][i] === gameData[2][i]
		) {
			return gameData[0][i];
		}
	}

	//Diagonal: checking top left to bottom right for equality
	if (
		gameData[0][0] > 0 &&
		gameData[0][0] === gameData[1][1] &&
		gameData[1][1] === gameData[2][2]
	) {
		return gameData[0][0];
	}

	//Diagonal: checking bottom left to top right for equality
	if (
		gameData[2][0] > 0 &&
		gameData[2][0] === gameData[1][1] &&
		gameData[1][1] === gameData[0][2]
	) {
		return gameData[2][0];
	}

	if (currentRound == 9) {
		return -1;
	}
	return 0;
}

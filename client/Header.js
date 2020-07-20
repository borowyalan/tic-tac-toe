function renderScore(winner) {
	let scoreElement;
	scoreElement = document.getElementById(`player${winner.id}`);
	scoreElement.getElementsByClassName("score")[0].innerHTML = winner.points;
}
function renderResult(result, winner, myMarker) {
	let resultElement = document.getElementById("result");
	switch (result) {
		case "win":
			resultElement.innerHTML = `Player ${winner.id} won the round!`;
			break;
		case "draw":
			resultElement.innerHTML = `This time it was a draw...`;
			break;
		case "gameStarted":
			resultElement.innerHTML = `Good luck! You are: ${myMarker}`;
			break;
		case "reset":
			resultElement.innerHTML = "";
			break;
	}
}

function changeTurnIndicator(currentPlayer) {
	let playersContainers = document.getElementsByClassName("playerContainer");
	for (let playersContainer of playersContainers) {
		playersContainer.style.borderColor = "transparent";
	}
	document.getElementById(`player${currentPlayer.id}`).style.borderColor =
		"lightblue";
	return currentPlayer;
}

export { renderScore, renderResult, changeTurnIndicator };

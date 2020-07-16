function renderScore(winner) {
	let scoreElement;
	scoreElement = document.getElementById(`player${winner.id}`);
	scoreElement.getElementsByClassName("score")[0].innerHTML = winner.points;
}
function renderResult(result, winner) {
	let resultElement = document.getElementById("result");
	switch (result) {
		case "win":
			resultElement.innerHTML = `Player ${winner.id} has won the round!`;

		case "draw":
			resultElement.innerHTML = `This time it was a draw...`;

		case "reset":
			resultElement.innerHTML = "";
	}
}

function changeTurnIndicator(currentPlayer) {
	let playersContainers = document.getElementsByClassName("playerContainer");
	for (let playersContainer of playersContainers) {
		playersContainer.style.backgroundColor = "white";
	}
	document.getElementById(`player${currentPlayer.id}`).style.backgroundColor =
		"lightblue";
	return currentPlayer;
}

export { renderScore, renderResult, changeTurnIndicator };

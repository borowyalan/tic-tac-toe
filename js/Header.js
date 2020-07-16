function renderScore(winner) {
	let scoreElement;
	scoreElement = document.getElementById(`player${winner.id}`);
	scoreElement.getElementsByClassName("score")[0].innerHTML = winner.points;
}
function renderResult(result, winner) {
	let resultElement = document.getElementById("result");
	if (result === "win") {
		resultElement.innerHTML = `Player ${winner.id} has won the round!`;
	} else {
		resultElement.innerHTML = `This time it was a draw...`;
	}
}

export { renderScore, renderResult };

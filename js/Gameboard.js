import { handleSquareClick } from "./Game.js";

function markSquare(squareId, marker) {
	let squareToMark = document.getElementById(squareId);
	squareToMark.innerHTML = marker;
}

function drawBoard() {
	let board = document.getElementById("board");

	// clear previous board
	if (board.hasChildNodes) {
		board.innerHTML = "";
	}

	for (let i = 0; i < 9; i++) {
		let square = document.createElement("div");
		square.addEventListener("click", () => handleSquareClick(i));
		square.setAttribute("id", i);
		square.setAttribute("class", "square");
		board.appendChild(square);
	}
}

export { drawBoard, markSquare };

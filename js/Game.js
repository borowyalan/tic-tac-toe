import { drawBoard, markSquare } from "./GameBoard.js";
import { PlayerFactory as Player } from "./Player.js";

let player1, player2;
let currentPlayer;

const init = () => {
	player1 = Player();
	player1.marker = "X";
	player2 = Player();
	player2.marker = "O";

	currentPlayer = decideWhoStarts();
	drawBoard();
	console.log("game initialized!");
};

function decideWhoStarts() {
	return Math.floor(Math.random() * 2 + 1) == 1 ? player1 : player2;
}

function handleSquareClick(squareId) {
	let allMarkedSquares = player1.markedSquares.concat(player2.markedSquares);
	if (!allMarkedSquares.includes(squareId)) {
		markSquare(squareId, currentPlayer.marker);
		currentPlayer.markedSquares = currentPlayer.markedSquares.concat(squareId);
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	} else {
		console.log("zajete");
	}
}

export { init, handleSquareClick };

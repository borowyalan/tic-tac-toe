import { drawBoard, markSquare } from "./GameBoard.js";
import { PlayerFactory as Player } from "./Player.js";
import { winningCombinations } from "./winningCombinations.js";
import { renderScore, renderResult } from "./Header.js";

let player1, player2;
let currentPlayer;

function init() {
	player1 = Player(1);
	player1.marker = "X";
	player2 = Player(2);
	player2.marker = "O";

	currentPlayer = decideWhoStarts();
	drawBoard();
	console.log("game initialized!");
}

function reset() {
	player1.squares = [];
	player2.squares = [];
	currentPlayer = decideWhoStarts();
	drawBoard();
}

function decideWhoStarts() {
	return Math.floor(Math.random() * 2 + 1) == 1 ? player1 : player2;
}

function handleSquareClick(squareId) {
	let allMarkedSquares = player1.squares.concat(player2.squares);
	if (!allMarkedSquares.includes(squareId)) {
		markSquare(squareId, currentPlayer.marker);
		currentPlayer.squares = currentPlayer.squares.concat(squareId);
	} else {
		console.log("This square is already taken!");
	}

	checkForWinnerOrDraw();
	currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function checkForWinnerOrDraw() {
	// win
	for (let combination of winningCombinations) {
		let isWinner = true;
		for (let square of combination) {
			if (!currentPlayer.squares.includes(square)) {
				isWinner = false;
				break;
			}
		}

		if (isWinner) {
			console.log(`Player ${currentPlayer.id} won!`);
			givePointTo(currentPlayer);
			renderResult("win", currentPlayer);
			reset();
		}
	}

	// draw
	if (player1.squares.concat(player2.squares).length === 9) {
		console.log("It's a draw!");
		renderResult("draw");
		reset();
	}
}

function givePointTo(winner) {
	winner.points += 1;
	renderScore(winner);
}

export { init, handleSquareClick };

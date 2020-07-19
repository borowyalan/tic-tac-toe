import { io } from "./index.js";
import { PlayerFactory as Player } from "./Player.js";
import { winningCombinations } from "./winningCombinations.js";

let player1, player2;
let currentPlayer;

function initGame(sockets) {
	// Player(id, socket, marker)
	player1 = Player(1, sockets[0], "X");
	player2 = Player(2, sockets[1], "O");

	currentPlayer = decideWhoStarts();
	io.to(player1.socket).emit("initGame", player1.marker, currentPlayer);
	io.to(player2.socket).emit("initGame", player2.marker, currentPlayer);
}

function decideWhoStarts() {
	return Math.floor(Math.random() * 2 + 1) == 1 ? player1 : player2;
}

function handleMove(squareId, socketId) {
	let playerMakingMove = findPlayerBySocket(socketId);
	let allMarkedSquares = player1.squares.concat(player2.squares);
	if (
		!allMarkedSquares.includes(squareId) &&
		playerMakingMove == currentPlayer
	) {
		playerMakingMove.squares = playerMakingMove.squares.concat(squareId);
		io.emit("move", squareId, currentPlayer);

		checkForWinnerOrDraw();
		// change turns
		currentPlayer = playerMakingMove.id === 1 ? player1 : player2;
		io.emit("changeTurn", currentPlayer);
	}
}

function checkForWinnerOrDraw() {
	console.log("check");
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
			currentPlayer.points += 1;
			io.emit("victory", currentPlayer);
			reset();
		}
	}

	if (player1.squares.concat(player2.squares).length === 9) {
		console.log("It's a draw!");
		io.emit("draw");
		reset();
	}
}

function findPlayerBySocket(socketId) {
	if (socketId === player1.socket) {
		return player1;
	} else {
		return player2;
	}
}

function reset() {
	player1.squares = [];
	player2.squares = [];
	io.emit("reset");
}

export { initGame, handleMove };

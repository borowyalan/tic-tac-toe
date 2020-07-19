import { drawBoard, markSquare } from "./GameBoard.js";
import { renderScore, renderResult, changeTurnIndicator } from "./Header.js";

/*
'io' is available in global scope because 'socket.io-client' is added to 'index.html' from socket.io's CDN.
Can't import it directly due to : https://github.com/socketio/socket.io/issues/3594;
*/

const socket = io("192.168.8.126:3000");

socket.on("connect", () => {
	console.log("connected!");
});

socket.on("initGame", (myMarker, currentPlayer) => {
	drawBoard();
	changeTurnIndicator(currentPlayer);
	renderResult("gameStarted", "", myMarker);
});

socket.on("move", (square, currentPlayer) => {
	markSquare(square, currentPlayer.marker);
});

socket.on("changeTurn", (currentPlayer) => {
	changeTurnIndicator(currentPlayer);
});

socket.on("victory", (winner) => {
	renderScore(winner);
	renderResult("win", winner);
});

socket.on("draw", () => {
	renderResult("draw");
});

socket.on("reset", () => {
	drawBoard();
});

function handleSquareClick(squareId) {
	renderResult("reset");
	socket.emit("move", squareId);
}

export { handleSquareClick };

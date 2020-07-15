import { drawBoard, markSquare } from "./GameBoard.js";
import { PlayerFactory as Player } from "./Player.js";

let player1, player2;

const init = () => {
	player1 = Player();
	player2 = Player();
	drawBoard();
	console.log("game initialized!");
};

function handleSquareClick(squareId) {
	let marker = "X";
	markSquare(squareId, marker);
}

export { init, handleSquareClick };

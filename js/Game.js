import { drawBoard, markSquare } from "./GameBoard.js";

const init = () => {
	console.log("game initialized!");
	drawBoard();
};

function handleSquareClick(squareId) {
	let marker = "X";
	markSquare(squareId, marker);
}

export { init, handleSquareClick };

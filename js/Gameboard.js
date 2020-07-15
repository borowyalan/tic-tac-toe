let squares = [];

function drawBoard() {
	let board = document.getElementById("board");
	for (let i = 0; i < 9; i++) {
		let square = document.createElement("div");
		square.setAttribute("id", i);
		square.setAttribute("class", "square");
		board.appendChild(square);
	}
}

export { drawBoard };

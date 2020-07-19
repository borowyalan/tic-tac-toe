const PlayerFactory = (id, socket, marker) => {
	let isTheirTurn = false;
	let squares = [];
	let points = 0;
	return { isTheirTurn, squares, id, points, socket, marker };
};

export { PlayerFactory };

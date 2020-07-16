const PlayerFactory = (id) => {
	let isTheirTurn = false;
	let squares = [];
	let points = 0;
	return { isTheirTurn, squares, id, points };
};

export { PlayerFactory };

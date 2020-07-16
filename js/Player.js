const PlayerFactory = (id) => {
	let isTheirTurn = false;
	let squares = [];
	return { isTheirTurn, squares, id };
};

export { PlayerFactory };

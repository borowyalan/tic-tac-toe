const PlayerFactory = () => {
	let isTheirTurn = false;
	let markedSquares = [];
	return { isTheirTurn, markedSquares };
};

export { PlayerFactory };

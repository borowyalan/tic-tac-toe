const PlayerFactory = () => {
	let isTheirTurn = false;
	let squaresMarked = [];
	return { isTheirTurn, squaresMarked };
};

export { PlayerFactory };

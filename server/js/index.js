import appImport from "express";
import httpImport from "http";
import ioImport from "socket.io";
const app = appImport();
const http = httpImport.createServer(app);
const io = ioImport(http);

import { initGame, handleMove } from "./game.js";

app.get("/", (req, res) => {
	res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
	let currentSockets = Object.keys(io.sockets.sockets);
	console.log(currentSockets);

	if (currentSockets.length > 2) {
		socket.disconnect();
	}

	if (currentSockets.length === 2) {
		initGame(currentSockets);
	}

	socket.on("move", (squareId) => {
		handleMove(squareId, socket.id);
	});

	socket.on("disconnect", () => {
		console.log("disconnect");
		console.log(currentSockets);
	});
});

http.listen(3000, () => {});

export { io };

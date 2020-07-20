import express from "express";
import httpImport from "http";
import ioImport from "socket.io";
import * as path from "path";
import { initGame, handleMove } from "./game.js";
import { fileURLToPath } from "url";

const app = express();
const http = httpImport.createServer(app);
const io = ioImport(http);
const PORT = 3000;

const __dirname = path.join(fileURLToPath(import.meta.url), "../../../");

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname));

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

http.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`);
});

export { io };

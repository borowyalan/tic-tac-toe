/*
'io' is available in global scope because 'socket.io-client' is added to 'index.html' from socket.io's CDN.
Can't import it due to : https://github.com/socketio/socket.io/issues/3594;
*/

const socket = io("localhost:3000");

socket.on('connect', ()=> {
    console.log('connected!');
})
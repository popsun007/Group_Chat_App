var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
// tell the express app to listen on port 8000
app.get('/', function(req, res) {
 res.render("index");
})
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
var socket_id = "";
io.sockets.on("connection", function(socket)
{
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
	socket_id = socket.id;
});
socket.on("new_msg", function(data)
	{
		console.log(data.)
	});
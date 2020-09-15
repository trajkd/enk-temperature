var groveSensor = require('jsupm_grove');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
 
var tempSensor = new groveSensor.GroveTemp(0);

app.get('/', function(req, res) {                  
    res.sendfile(__dirname + '/src/views/index.html');
});                                                 
 
io.on('connection', function(socket){
    var interval = setInterval(function(){
        socket.emit('temperature', { celsius: tempSensor.value() });
    }, 500);
    socket.on('disconnect', function(){
        clearInterval(interval);
    });    
});                                                   
 
server.listen(8081);

var localtunnel = require('localtunnel');
var port = 8081;

var tunnel = localtunnel(port, function(err, tunnel) {
    if (err){console.log(err)}
    
    console.log('tunnel open at url: ' +tunnel.url);
});

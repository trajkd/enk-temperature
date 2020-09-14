var groveSensor = require('jsupm_grove');
var temp = new groveSensor.GroveTemp(1);

document.getElementById("temp").innerHTML = "The current temperature is C " + temp.value();

var localtunnel = require('localtunnel');
var port = 8081;

var tunnel = localtunnel(port, function(err, tunnel) {
    if (err){console.log(err)}
    
    console.log('tunnel open at url: ' +tunnel.url);
});
var net = require('../../../client');

net.setProxy({
  hostname: 'localhost',
  port:     3000,
  remote:   {address: '142.250.176.14', family: 'IPv4', port: 80},
  api:      false
});

// These options are ignored. All connections are routed to the endpoint configured by proxy.
// The remote address is the DNS lookup for 'google.com'.
// Configuring the proxy with a remote address is only to provide a value to return for: socket.address()
var socket = net.connect({
  host: 'google.com',
  port: 80
});

socket.on('error', function (err) {
  console.error(err);
});

socket.on('connect', function () {
  console.log('Connected!');
});

socket.on('data', function (buffer) {
  document.getElementById('output').innerHTML += buffer.toString();
});

socket.on('end', function () {
  console.log('Socket closed.');
});

var ending = '\r\n';

var reqStr = 'GET /'+ending+'Host: google.com'+ending+ending;
document.getElementById('input').innerHTML = reqStr;

socket.write(reqStr);

var express = require('express');
var path = require('path');
var api = require('./api');

module.exports = function (options) {
  options = options || {};

  var app = express();
  var apiOptions            = options.apiOptions || null;
  var apiConnectionListener = options.apiConnectionListener || function(socket, client_ip) {
    console.log('Connection established by client at ' + client_ip);
  };
  var htdocs                = options.htdocs || null;
  var port                  = options.port || 3000;
  var serverListenCallback  = options.serverListenCallback || function() {
    console.log('Server listening on port ' + port);
  };

  app.use(
    api(apiOptions, apiConnectionListener)
  );

  if (htdocs) {
    htdocs = path.resolve(htdocs);

    app.use(
      express.static(htdocs)
    );
  }

  app.listen(port, serverListenCallback);
}

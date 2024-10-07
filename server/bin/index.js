#! /usr/bin/env node

const argv_vals = require('./util/process_argv')
const server    = require('../lib/server')

server({
  apiOptions: {
    log:                 false,
    urlRoot:             (argv_vals["--basepath"] || '/api/vm/net'),
    server:              null,
    allowOrigin:         (argv_vals["--cors-allow-origin"] || false),
    to:                  null
  },
  apiConnectionListener: null,
  htdocs:                (argv_vals["--htdocs"] || null),
  port:                  (argv_vals["--port"] || 3000),
  serverListenCallback:  null
})

## [net-browserify](https://github.com/warren-bank/fork-net-browserify/tree/fork)

`net` module for browserify, with a websocket server proxy.

Supported methods:
* `net.connect(options, cb)`
* `net.isIP(input)`, `net.isIPv4(input)`, `net.isIPv6(input)`

Examples are available in [`tests/`](./tests/).

### How to use

#### Client

Either use this library directly in projects that __only__ target a browser runtime environment,
or (more likely) use it in the configuration for an app bundler (ex: _Webpack_ or _Browserify_)
to replace all imports of the `net` module that is native to _Node.js_ with an instance of this library.
```bash
$ npm install "@warren-bank/net-browserify"
```

A TCP proxy server is a required workaround for the limitation that client-side javascript cannot make TCP socket connections.
* allows the client-side javascript to connect by websocket
* pipes data from the websocket to the TCP socket
* pipes data from the TCP socket to the websocket

Configure the location of a TCP proxy server:
```js
var net = require('net');

// By default, the 'hostname' and 'port' of the server that served the webpage running this client-side code is assumed.
// This assumption is based on the fact that the included 'API Proxy Server' can also serve static files.
net.setProxy({
  hostname: 'localhost',
  port: 3000
});

// Use the `net` module like on a server.
var socket = net.connect({
  host: 'google.com',
  port: 80
});

socket.on('connect', function () {
  console.log('Connected to google.com!');
});
```

#### Server

Install globally.
```bash
$ npm install --global "@warren-bank/net-browserify-api-proxy-server"
```

Run from the command-line.
```bash
$ net-browserify-api-proxy-server --help
```

```text
usage:
======
net-browserify-api-proxy-server <options>

========
options:
========
"--help"
    Print a summary of all command-line options.

"-v"
"--version"
    Print the current version.

"-b" <string>
"--basepath" <string>
    Specify the URL basepath for all API endpoints.
    Default: '/api/vm/net'

"-o" <string | true>
"--cors-allow-origin" <string | true>
    Specify whether to set permissive CORS headers for all API endpoints.
    'Access-Control-Allow-Origin' is assigned this value, unless 'true'.
    When 'true', the value assigned is the origin of the request.
    Example: '*'
    Default: disabled

"-d" <dirpath>
"--htdocs" <dirpath>
    Specify whether to serve static files using a directory as the root path.
    Directory paths are resolved relative to the current working directory.
    Example: '.'
    Default: disabled

"-p" <integer>
"--port" <integer>
    Specify the port number at which the server listens for connections.
    Default: 3000
```

### License

* [_net-browserify@0.2.4_](https://github.com/emersion/net-browserify/blob/8265d15a1a8beddc951bab60f040552f254a3134/package.json#L3) is [MIT](https://github.com/emersion/net-browserify/blob/8265d15a1a8beddc951bab60f040552f254a3134/LICENSE)
* all original code belonging to this fork that is not in the upstream project is [GPL-2.0](https://github.com/warren-bank/fork-net-browserify/blob/fork/LICENSE.txt)

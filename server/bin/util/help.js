const help = `
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
`

module.exports = help

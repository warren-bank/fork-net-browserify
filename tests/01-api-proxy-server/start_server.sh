#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

bin_js="${DIR}/../../server/bin/index.js"

echo 'Open in browser: http://localhost:3000/'
echo ''

node "$bin_js" -b '/api/vm/net' -o 'true' -d './htdocs' -p 3000

#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

browserify "${DIR}/src/client.js" -o "${DIR}/htdocs/bundle.js"

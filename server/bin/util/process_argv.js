const process_argv = require('@warren-bank/node-process-argv')

const argv_flags = {
  "--help":                  {bool: true},
  "--version":               {bool: true},

  "--basepath":              {},
  "--cors-allow-origin":     {},
  "--htdocs":                {file: "path-exists"},
  "--port":                  {num: "int"}
}

const argv_flag_aliases = {
  "--version":               ["-v"],

  "--basepath":              ["-b"],
  "--cors-allow-origin":     ["-o"],
  "--htdocs":                ["-d"],
  "--port":                  ["-p"]
}

let argv_vals = {}

try {
  argv_vals = process_argv(argv_flags, argv_flag_aliases)
}
catch(e) {
  console.log('ERROR: ' + e.message)
  process.exit(1)
}

if (argv_vals["--help"]) {
  const help = require('./help')
  console.log(help)
  process.exit(0)
}

if (argv_vals["--version"]) {
  const data = require('../../package.json')
  console.log(data.version)
  process.exit(0)
}

if (argv_vals["--cors-allow-origin"] && (argv_vals["--cors-allow-origin"].toLowerCase() === 'true')) {
  argv_vals["--cors-allow-origin"] = true
}

module.exports = argv_vals

#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../src/cli/helper.js').help(process.argv);

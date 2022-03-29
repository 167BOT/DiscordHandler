const myFunctions = require('./config/charge.json')

function loadNames(folder) {
    folder = myFunctions[folder]
    if (!folder) return;

    return folder
  }

module.exports = loadNames

const Handler = require('../src/Handler.js')

const myClient = new Handler('../commands', '../events', '../commands/commands.json')
myClient.runEvents()

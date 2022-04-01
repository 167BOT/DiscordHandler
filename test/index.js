const Handler = require('../src/Handler.js')

const myClient = new Handler('../commands', '../events', '../commands/commands.json', {intents: 32767})
myClient.runEvents()//all events
myClient.get('events', 'ready').run(myClient.client)//one event

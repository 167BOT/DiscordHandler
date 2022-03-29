const client = require('../loader/loader.js')

client.events.getOne('ready').ready.run(client)
client.events.getOne('message').message.run(client)

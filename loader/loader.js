const {Client} = require('discord.js');
const client = new Client({intents: 32767});
const Cache = require('pluscache');

//load files
const loadEvents = require('./functions/loadEvents.js'),
      loadCommands = require('./functions/loadCommands.js')

client.commands = new Cache();
client.events = new Cache();

function loader(commandsFolder, eventsFolder, json) {
  loadCommands(client, commandsFolder, json)
  loadEvents(client, eventsFolder, json)

  return client
}

module.exports = loader

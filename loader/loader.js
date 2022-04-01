const Cache = require('pluscache');

//load files
const loadEvents = require('./functions/loadEvents.js'),
      loadCommands = require('./functions/loadCommands.js')



function loader(commandsFolder, eventsFolder, json, clientOptions) {
  const {Client} = require('discord.js');
  const client = new Client(clientOptions);

  client.commands = new Cache();
  client.events = new Cache();

  loadCommands(client, commandsFolder, json)
  loadEvents(client, eventsFolder, json)

  return client
}

module.exports = loader

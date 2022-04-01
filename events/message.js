module.exports = {
  run: (client) => {
    client.on("messageCreate", async (message) => {
      const prefix = 'r!'

      const args = message.content.slice(prefix.length).trim().split(/ +/gm)
      const command = args.shift().toLowerCase()

      if (!message.content.toLowerCase().startsWith(prefix)) return;
      if (message.author.bot) return;
      let runner = client.commands.getAll().data

      runner.forEach(x => {
        const keys = Object.keys(x)

        for (let key of keys) {

          if (x[key].name == command || x[key].alias == command) return runner = x[key].run
        }
      });

      try {
       runner.run(client, message, args)
      } catch(e) {
       return message.channel.send(`**${command}** no es un comando reconocido, inténtalo de nuevo`)
      }
    });
  }
}

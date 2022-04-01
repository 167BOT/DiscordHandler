module.exports = {
  type: "sync",//the type of the command. Types: async | sync
  run: (client, message, args) => {
    return message.channel.send('Hello world!')
  }
}

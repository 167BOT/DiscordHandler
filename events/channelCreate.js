module.exports = {
  run: (client) => {
    client.on("channelCreate", (channel) => {
      console.log(`Se ha creado con éxito el canal ${channel.name} en ${channel.guild}`)
      /*code*/
    });
  }
}

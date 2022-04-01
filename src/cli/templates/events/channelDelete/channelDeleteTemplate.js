module.exports = {
  run: (client) => {
    client.on("channelDelete", (channel) => {
      console.log(`Se ha eliminado con éxito el canal ${channel.name} en ${channel.guild}`)
      /*code*/
    });
  }
}

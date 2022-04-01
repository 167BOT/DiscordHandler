module.exports = {
  run: (client) => {
    client.on("guildDelete", (guild) => {
      console.log(`He salido de un servidor... Se llama ${guild.name}`)
      /*code*/
    });
  }
}

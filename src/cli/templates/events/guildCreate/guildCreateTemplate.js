module.exports = {
  run: (client) => {
    client.on("guildCreate", (guild) => {
      console.log(`¡He entrado en un nuevo servidor! Se llama ${guild.name}`)
      /*code*/
    });
  }
}

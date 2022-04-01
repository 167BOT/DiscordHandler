module.exports = {
  run: (client) => {
    client.on("guildMemberRemove", (member) => {
      console.log(`Adiós, ${member.user.username}. Ojalá vuelvas a: ${member.guild}...`)
      /*code*/
    });
  }
}

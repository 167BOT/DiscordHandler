module.exports = {
  run: (client) => {
    client.on("guildMemberAdd", (member) => {
      console.log(`Hola, ${member.user.username}. Tu ID es: ${member.id}`)
      /*code*/
    });
  }
}

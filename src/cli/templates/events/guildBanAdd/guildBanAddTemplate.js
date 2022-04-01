module.exports = {
  run: (client) => {
    client.on("guildBanAdd", (ban) => {
      console.log(`El usuario ${ban.user.username} ha sido baneado por ${ban.reason ?? 'razones desconocidas'}`)
      /*code*/
    });
  }
}

module.exports = {
  run: (client) => {
    client.on("guildBanRemove", (ban) => {
      console.log(`El usuario ${ban.user.username} ha sido desbaneado por ${ban.reason ?? 'razones desconocidas'}`)
      /*code*/
    });
  }
}

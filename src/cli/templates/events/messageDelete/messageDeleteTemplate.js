module.exports = {
  run: (client) => {
    client.on("messageDelete", async (message) => {
      console.log(`Se ha eliminado el mensaje con el contenido "${message.content}"`)
      /*code*/
    });
  }
}

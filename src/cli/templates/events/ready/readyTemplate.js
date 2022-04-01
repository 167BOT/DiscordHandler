module.exports = {
  run: (client) => {
    client.on("ready", () => {
      console.log('Conectado con éxito')
      /*code*/
    });

    client.login("MYTOKEN")//pon tu token aquí
  }
}

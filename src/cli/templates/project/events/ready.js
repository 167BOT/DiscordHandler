module.exports = {
  run: (client) => {
    client.on("ready", () => {
      console.log(`Conectado con éxito`)
    });

    client.login("MYTOKEN")//pon tu token aquí
  }
}

const fs = require('fs')
const path = require('path')
const loadNames = require('./charge.js')
const myCommands = require("../../commands/commands.json")

function runCommands(client) {
const regexJS = new RegExp(`(\.json|\.js)$`, 'gm')
let consoleNames = [],
    status = {err: false}

fs.readdirSync(path.resolve(__dirname, '../../commands')).forEach((folder) => {
 if (folder.match(regexJS)) return;
 if (status.err) return;

  fs.readdirSync(path.resolve(__dirname, `../../commands/${folder}`)).forEach((file) => {
    if (!file.match(regexJS)) return;
    name = file.replace('.js', '')

    const options = {
      run: require(path.resolve(__dirname, `../../commands/${folder}/${file}`)),
      options: myCommands[0][name].options,
      description: myCommands[0][name].desc,
      alias: myCommands[0][name].alias
    }

    client.commands.insert(name, options)
  });

  status = loadNames(folder)
  consoleNames.push({Nombre: status ?? `¿${folder}?`, Tipo: 'Comandos', Estado:(!status ? "Down" : "Ready")})
  if (!status) return status = {err: true, folder: folder}
});

  console.table(consoleNames)
  if (status?.err) throw console.log(`\x1b[31mHa ocurrido un fallo de comando. Posiblemente, se haya cambiado el nombre de una carpeta a "${status.folder}"\x1b[0m`)
}

module.exports = runCommands

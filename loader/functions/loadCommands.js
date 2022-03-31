const fs = require('fs')
const path = require('path')
const moduleErr = require('../../utils/moduleErr.js')

function runCommands(client, folders, json) {
const regexJS = new RegExp(`(\.json|\.js)$`, 'gm')
const myCommands = require(path.resolve(json))

let consoleNames = [],
    status = {err: false}

fs.readdirSync(path.resolve(folders)).forEach((folder) => {
 if (folder.match(regexJS)) return;
 if (status.err) return;

  fs.readdirSync(path.resolve(`${folders}/${folder}`)).forEach((file) => {
    if (!file.match(regexJS)) return;
    name = file.replace('.js', '')

    const options = {
      run: require(path.resolve(`${folders}/${folder}/${file}`)),
      name: myCommands[0][name].name,
      options: myCommands[0][name].options,
      description: myCommands[0][name].desc,
      alias: myCommands[0][name].alias
    }

    client.commands.insert(name, options)
  });

  status = myCommands[2][name].loadedMessage
  consoleNames.push({Nombre: status ?? `¿${folder}?`, Tipo: 'Comandos', Estado:(!status ? "Down" : "Ready")})
  if (!status) return status = {err: true, folder: folder}
});

  console.table(consoleNames)
  if (status?.err) throw new moduleErr(`\x1b[31mHa ocurrido un fallo de comando. Posiblemente, se haya cambiado el nombre de una carpeta a "${status.folder}"\x1b[0m`)
}

module.exports = runCommands

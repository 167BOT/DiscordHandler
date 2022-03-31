const fs = require('fs')
const path = require('path')
const moduleErr = require('../../utils/moduleErr.js')

function runEvents(client, folder, json) {
const regexJS = new RegExp(`(\.json|\.js)$`, 'gm')
const myEvents = require(path.resolve(json))

let consoleNames = [],
    status = {err: false}

fs.readdirSync(path.resolve(folder)).forEach((file) => {
 if (!file.match(regexJS)) return;
 name = file.replace('.js', '')

    const options = {
      run: require(path.resolve(`${folder}/${file}`)).run,
    }

 client.events.insert(name, options)

 status = myEvents[1][name].loadedMessage
 consoleNames.push({Nombre: status ?? `¿${file}?`, Tipo: 'Eventos', Estado:(!status ? "Down" : "Ready")})
 if (!status) return status = {err: true, folder: name}
});

  console.table(consoleNames)
  if (status?.err) throw new moduleErr(`\x1b[31mHa ocurrido un fallo de evento. Posiblemente, se haya cambiado el nombre de un archivo a "${status.folder}"\x1b[0m`)
}

module.exports = runEvents

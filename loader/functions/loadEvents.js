const fs = require('fs')
const path = require('path')
const loadNames = require('./charge.js')

function runEvents(client) {
const regexJS = new RegExp(`(\.json|\.js)$`, 'gm')
let consoleNames = [],
    status = {err: false}

fs.readdirSync(path.resolve(__dirname, '../../events')).forEach((file) => {
 if (!file.match(regexJS)) return;
 name = file.replace('.js', '')

    const options = {
      run: require(path.resolve(__dirname, `../../events/${file}`)).run,
    }

 client.events.insert(name, options)

 status = loadNames(name)
 consoleNames.push({Nombre: status ?? `¿${file}?`, Tipo: 'Eventos', Estado:(!status ? "Down" : "Ready")})
 if (!status) return status = {err: true, folder: name}
});

  console.table(consoleNames)
  if (status?.err) throw console.log(`\x1b[31mHa ocurrido un fallo de evento. Posiblemente, se haya cambiado el nombre de un archivo a "${status.folder}"\x1b[0m`)
}

module.exports = runEvents

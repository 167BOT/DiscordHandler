const loader = require('../loader/loader.js')
const moduleErr = require('../utils/moduleErr.js')

class Handler {
  constructor(commandsFolder, eventsFolder, functionsJSON) {
    if (!commandsFolder || !eventsFolder || !functionsJSON) throw new moduleErr('Faltán parámetros. Revisa la documentación: https://github.com/167BOT/FreeHandler#readme')
    this.client = loader(commandsFolder, eventsFolder, functionsJSON)
  }

  get(type, name) {
    if (!type || !name) throw new moduleErr(`Faltan parámetros (${type ? 'name' : 'type'}). Revisa la documentación: https://github.com/167BOT/FreeHandler#readme`)
    const getter = this.client[type].getOne(name)[name]

    return getter
  }

  runEvents() {
    const getter = this.client.events.getAll().data

    if (getter.length < 1 || !getter) throw new moduleErr('No hay ningún evento guardado')
    else {
      getter.forEach(item => {
        const key = Object.keys(item)

        item[key].run(this.client)
      });
    }
  }
}

module.exports = Handler

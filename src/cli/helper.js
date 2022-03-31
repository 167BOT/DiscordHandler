import Menu from './Menu.js'
import {exit} from 'process'

function filterArguments(args) {
  let result = args.slice(2)

  return result
}

export async function help(args) {
  try {
    console.clear()
    const filter = filterArguments(args)

    const menu = new Menu(filter);
    const options = await menu.setOptions()

    if (options.exit) return console.log('El proceso ha sido cancelado') && exit()

    console.clear()
    const subOptions = await menu.setSubOptions(options.toLowerCase().replace(' ', ''))
  } catch(e) {
    return console.log(e.message) && exit()
  }
}

import inquirer from 'inquirer'
import myTemplates from './templates/options.json'
import fs from 'fs'
import path from 'path'
import ncp from 'ncp'
import {cwd} from 'process'
import {promisify} from 'util'
import chalk from 'chalk'

const copyTemplates = promisify(ncp.ncp)
const access = promisify(fs.access)

class Menu {
  constructor(options) {
    this.options = options.length < 1 ? null : options;
  }

  async setOptions() {
    const question = [
      {
        name: "Opciones",
        type: 'list',
        message: '¡Hola! ¿Que vas a hacer hoy?',
        choices: ['New Project', 'command', 'event', 'JSON', 'Exit']
      }
    ]

    const answer = await inquirer.prompt(question)

    if (answer.Opciones == 'Exit') throw new Error('El proceso ha sido cancelado')
    else return answer.Opciones
  }

  async setSubOptions(type) {
    //console.clear()

    let questions = [],
        template = {project:path.resolve(__dirname, myTemplates['newproject'].path),json:path.resolve(__dirname, myTemplates['json'].path)}

    if (type == 'command') {
      questions.push({
        name: 'Tipo',
        type: 'list',
        message: 'Bueno, bueno... ¿que quieres que haga por tí?',
        choices: ['Command Template', 'Exit']
      });
    }

    if (type == 'event') {
      questions.push({
        name: 'Tipo',
        type: 'list',
        message: 'Bueno, bueno... ¿que quieres que haga por tí?',
        choices: [
          'Event Channel Create',
          'Event Channel Delete',
          'Event Template',
          'Event Guild Ban Add',
          'Event Guild Ban Remove',
          'Event Guild Create',
          'Event Guild Delete',
          'Event Guild Member Add',
          'Event Guild Member Remove',
          'Event Message Create',
          'Event Message Delete',
          'Event Ready',
          'Exit'
        ],
        loop: false
      });
    }

    if (type == 'newproject') {
      questions = await inquirer.prompt([
        {
        name: 'Confirmar',
        type: 'confirm',
        message: `¿Quieres crear un nuevo proyecto en ${await cwd()}?`
        }
      ]);

      if (questions.Confirmar) {
        await this.createTemplate(template.project)

        return console.log('%s ¡La plantilla ha sido creada!', chalk.green.bold('CREADO'));
      } else throw new Error('El proceso ha sido cancelado')
    }

    if (type == 'json') {
      questions = await inquirer.prompt([
        {
        name: 'Confirmar',
        type: 'confirm',
        message: `¿Quieres crear un nuevo archivo de opciones en ${await cwd()}?`
        }
      ]);

      if (questions.Confirmar) {
        await this.createTemplate(template.json)

        return console.log('%s ¡La plantilla ha sido creada!', chalk.green.bold('CREADO'));
      } else throw new Error('El proceso ha sido cancelado')
    }

    let answer = await inquirer.prompt(questions)

    if (answer.Tipo == 'Exit') throw new Error('El proceso ha sido cancelado')
    template = path.resolve(__dirname, myTemplates[answer.Tipo.toLowerCase().replace(/ +/gm, '')].path)

    answer = await inquirer.prompt([
      {
      name: 'Confirmar',
      type: 'confirm',
      message: `¿Quieres crear una nueva plantilla en ${await cwd()}?`
      }
    ]);

    if (answer.Confirmar) {
      await this.createTemplate(template)

      return console.log('%s ¡La plantilla ha sido creada!', chalk.green.bold('CREADO'));
    } else throw new Error('El proceso ha sido cancelado')
  }

  async createTemplate(pathway) {
    await copyTemplates(pathway, cwd(), {clobber: false})
  }
}

export default Menu

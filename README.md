# Free Handler
Free Handler es un módulo manejador de archivos especializado para hacer `Command Handler` en [discord.js](https://www.npmjs.com/package/discord.js).

Free Handler puede manejar de forma fácil todos tus comandos siguiendo su sintaxis y requerimientos.
Puedes incluso con la barra de comandos crear proyectos de manera rápida y otras plantillas.

# Paquetes importantes
El paquete precisa una versión de `discord.js@13.0.0` o superiores para funcionar correctamente. Si sale una nueva versión superior a la `v13` y quieres seguir usando el módulo, espera a que el desarrollador actualice el paquete.
En resumen:

| Requerimientos | Versión del paquete | Versiones no soportadas
| -- | -- | --
| [discord.js@13.0.0](https://www.npmjs.com/package/discord.js/v/13.0.0) | [discord.js@13.6.0](https://www.npmjs.com/package/discord.js/v/13.6.0) | [discord.js@14.0.0DEV](https://www.npmjs.com/package/discord.js/v/14.0.0-dev.1648515273-ac4bc3a)

# Comandos en línea
Puedes hacer uso de `helpHandler` en la carpeta donde quieras instalar las plantillas.
**¡PARA PODER USARLO, INSTALA EL MÓDULO DE FORMA GLOBAL CON `npm i freehandler -g`!**
![Menú](https://cdn.discordapp.com/attachments/779525789921705988/959180092406390855/unknown.png)

Muévete por todas las opciones, aquí hay una tabla que resume que hace cada opción:

| Opción | Acción |
| -- | -- |
| New project | Crea un nuevo proyecto funcional  |
| command | Crea una nueva plantilla de un comando
| event | Crea una nueva plantilla de un evento
| JSON | Crea tu archivo `.json` de configuración

 Se irán actualizando las plantillas y añadiendo más para mejorar la velocidad de creación de código solo para tí, programador.

 # Estructura
Debes usar la siguiente estructura para poder usar de forma correcta el módulo:
```
> myProject
	> commands
		> Moderation
			- Ban.js
			- Kick.js
		> Fun
			- Smile.js
			- Sad.js
	> events
		- messageCreate.js
		- ready.js
	- index.js
	- myOptions.json
```
Dentro de `myOptions.json` se debe de seguir este patrón:
```json
[
  {
    "Ban" : {
      "name" : "ban",
      "alias" : ["b"],
      "options" : ["Aún está en alpha", "time"],
      "desc" : "Puedes poner aquí los comandos y toda su información a partir de esta plantilla. Recuerda que el key del comando debe de ser el mismo que el del archivo. EJ: el archivo de este comando se llama Ban"
    }
  },
  {
    "messageCreate" : {
      "loadedMessage" : "Esto es necesario. Cuando un evento cargue, se reproducirá este mensaje. Pon el mismo nombre del archivo donde tenga el evento"
    }
  },
  {
    "Moderation" : {
      "loadedMessage" : "Esto es necesario. Al cargar una carpeta, se reproducirá este mensaje. Pon el mismo nombre de la carpeta dónde tengas los comandos"
    }
  }
]
```

 # Clase `Handler(Commands, Events, JSON, ClientOptions)`
 Crea un nuevo Handler de forma sencilla.

 | Propiedades | Descripción | Tipo
 | -- | -- | --
 | Commands | Es la ruta de la carpeta donde se encuentren todos los comandos | `String`
 | Events | Es la ruta de la carpeta donde se encuentren todos los eventos | `String`
 | JSON | Es la ruta del archivo de configuración `.json` | `String`
 | ClientOptions | Las opciones del cliente de `discord.js` . Puedes verlas [aquí](https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions)| `Object`

 ```js
 const Handler = require('freehandler');
 const myClient = new Handler('./commands', './events', './commands/opts.json', {intents: 32767})// => Okey!

 /*
 A continuación en consola se carga la interfaz donde puedes ver la carga de todos los archivos
 */
 ```

 ![](https://cdn.discordapp.com/attachments/779525789921705988/959531537446105178/interfaz.png)

 # Funciones de clase
 La clase incorpora dos funciones sencillas y rápidas de ejecutar. Estas son `class.get()` y `class.runEvents()`

 ## `get(Type, Name)`
 Busca de forma individual todos tus comandos y eventos cargados dentro del cliente. Su uso está enfocado en correr de forma individual eventos y comandos de forma rápida y eficaz.

 | Propiedades | Descripción | Tipo |
 | -- | -- | -- |
 | Type | El tipo de dato a buscar. De alguna forma, funciona como filtro. Puedes elegir entre: `events` y `commands` | `String`
 | Name | El nombre de la función que buscas | `String`

 ```js
myClient.get('events', 'message').run(myClient.client)
myClient.get('commands', 'say').run(myClient.client, /*your options 🤓*/)
 ```
 ## `runEvents()`
 Corre **TODOS** los ejemplos que tengas cargados de una vez. Es práctico
 ```js
 myClient.runEvents()// => Okey!
 ```

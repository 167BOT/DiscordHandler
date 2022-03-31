const Handler = require('freehandler')
const handlerManager = new Handler('myCommandFolder', 'myEventsFolder', 'myJSONFunctions')

handlerManager.get('events', 'ready').run(handlerManager.client)//run event ready
handlerManager.get('events', 'message').run(handlerManager.client)//run event message

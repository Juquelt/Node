const http = require('http')
const path = require('path')
const express = require('express')

/**
 * Configuration de l'application
 */

const PORT = 9000

const app = express()
const server = http.Server(app)
const io = require('socket.io')(server)

app.set('view engine', 'pug')
app.set('views', 'views')
app.set('view cache', process.env.NODE_ENV === 'production')
app.locals.pretty = (process.env.NODE_ENV !== 'production')


/**
 * Middleware de l'application
 */

app.use(express.static(path.join(__dirname, 'public'))) // Sert les ressources statiques dans /public/

/**
 * Routes de l'application
 */

require('./router.js')(app)
require('./websocket.js')(app, io)

/**
 * Initialisation de l'application
 */

server.listen(PORT, () => {
    console.log(`Server ready on http://localhost:${PORT}`)
})

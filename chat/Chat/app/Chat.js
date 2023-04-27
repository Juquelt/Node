const ent = require('ent')

const User = require('./User')

class Chat {
    constructor(io) {
        this.io = io
        this.users = []
        this.messages = []
    }

    onConnection(socket) {
        console.log('Client', socket.id, 'is connected via WebSockets')
        
        socket.once('user:nickname', (nickname) => {
            const user = new User(socket, nickname)
            this.users.push(user)
            this.io.sockets.emit('user:list', this.getUsernamesList())

            socket.on('message:new', (message) => this._onNewMessage(user, message))
            socket.on('disconnect', () => this._onUserDisconnect(user))
        })
    }

    _onUserDisconnect(user) {
        let index = this.users.indexOf(user)
        if (index > -1) {
            this.users.splice(index, 1)

            user.destroy()

            this.io.sockets.emit('user:list', this.getUsernamesList())
        }
    }

    _onNewMessage(user, message) {
        message = ent.encode(message);

        this.io.sockets.emit('message:new', {message, nickname: user.nickname})
    }

    getUsernamesList() {
        return this.users.map(user => user.nickname);
    }
}

module.exports = Chat

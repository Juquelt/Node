class Channel {
    constructor(io, title){
        this.io = io
        this.title = title
        this.users = []
    }

    addMessage(user, room, message){}
    
    pushUser(user){}

    removeUser(user){}

    getUsersList(){}

    destroy(){}
}

module.exports = Channel
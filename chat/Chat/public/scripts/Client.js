class Client {
    constructor() {
        this.socket = io.connect('/'); // "socket" est un objet représentant ce socket client unique

        this.nickname = window.prompt('Choisissez un pseudonyme');
        this._setNickname(this.nickname);

        this.$form     = $('form#chat');
        this.$message  = $('input#message');
        this.$messages = $('ul#messages');

        this.socket.on('message:new', ({nickname, message}) => this.receiveMessage(nickname, message));
        this.socket.on('user:list', (usernamesList) => this.updateUsersList(usernamesList));
    }
    _setNickname(nickname) {
        this.socket.emit('user:nickname', nickname);
    }

    updateUsersList(usernamesList) {
        let template = '';
        usernamesList.forEach(username => {
            template += `<li>
                            ${username === this.nickname 
                                ? `<strong>${username}</strong>`
                                : username
                            }
                        </li>`;
            $('#usersList').html(template);
        })
    }
    init() {
        this.$form.on('submit', (event) => {
            event.preventDefault();
            this.sendMessage(this.$message.val());
            this.$message.val('')[0].focus();
        });
    }

    sendMessage(message) {
        this.socket.emit('message:new', message);
    }

    receiveMessage(nickname, message) {
        const html = `<li class="list-group-item">
                        <span class="badge badge-dark">${nickname}</span>
                        ${message}
                    </li>`;
        this.$messages.prepend(html);
    }
}

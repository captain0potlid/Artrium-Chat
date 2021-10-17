const socket = io();

const sendBtn = document.querySelector('.send-button');

function addBubble(content) {
    const bubble = document.createElement('div');
}

sendBtn.addEventListener('click', () => {
    const prmtr = {
        sender: '',
        msg: ''
    }

    socket.emit('chat', prmtr);
});

socket.on('chat', (data) => {
    document.querySelector('#')
})
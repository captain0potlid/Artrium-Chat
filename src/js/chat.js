const socket = io();
const chat = document.querySelector('#chat');
const sendBtn = document.querySelector('.send-button');

sendBtn.addEventListener('click', () => {
    const data = { sender: 'sender', receiver: '', msg: '' }

    socket.emit('chat', data);
});

socket.on('chat', (data) => {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-outter');
    bubble.classList.add('self');
    bubble.innerHTML = `<div class='chat-inner'>${data.msg}</div>`;
    chat.appendChild(bubble);
});
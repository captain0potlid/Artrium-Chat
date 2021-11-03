const socket = io();

const bubbles = document.querySelector('#chat > #bubbles');
const chatInput = document.querySelector('#chat > #input-outter > #input-inner > textarea');
const sendButton = document.querySelector('#chat > #input-outter > #input-inner > button');

function addBubble(msg) {
    const container = document.createElement('div');
    const content = document.createElement('div');

    container.classList.add('bubble-outter');
    container.classList.add('self');
    content.classList.add('bubble-inner');
    content.innerText = msg;

    container.appendChild(content);

    return container;
}

function sendBubble(e) {
    if (e.keyCode && !e.keyCode === 13) { return; }

    const data = {
        from: 'self', // dummy
        to: 'server', // dummy
        msg: chatInput.value
    }

    socket.emit('chat', data); // send data to server
}

chatInput.addEventListener('keypress', sendBubble);
sendButton.addEventListener('click', sendBubble);

socket.on('chat', (data) => {
    
});
"use strict"
const socket = io()

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

function createElement( str ) {
    var frag = document.createDocumentFragment();

    var elem = document.createElement('div');
    elem.innerHTML = str;

    while (elem.childNodes[0]) {
        frag.appendChild(elem.childNodes[0]);
    }
    return frag;
}

sendButton.addEventListener("click", () => {
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)

})

socket.on("chatting", (data) => {    
    var name = data.name;
    var msg = data.msg;

    let html = `
    <li class="normalchat">
        <br>
        <span class="chat">` + name + `님의 채팅 : ` + msg + `</span>
    </li>
    `

    let fragment = createElement(html)
    document.getElementById('0164').appendChild(fragment)
})
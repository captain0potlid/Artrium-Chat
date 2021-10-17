"use strict"
const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

function createElement(str) {
    const frag = document.createDocumentFragment();

    const elem = document.createElement('div');
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
    const name = data.name;
    const msg = data.msg;

    const html = `
    여기 const 줄은 스킵!!!!!!! 작업중!!!!!

    <
    `

    let fragment = createElement(html)
    document.getElementById('0164').appendChild(fragment)
})
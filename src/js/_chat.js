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

function getDate() {
    const d = new Date();
    const ww = d.getHours() + ":"+  d.getMinutes();
    return ww;
}

chatInput.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13) {
        alert(getDate() + ' - 해당 기능은 아직 개발중인 기능입니다!')
    }
})

sendButton.addEventListener("click", () => {
    var myDiv = document.getElementById("chat");
    myDiv.scrollTop = myDiv.scrollHeight; // scroll to bottom

    const param = {
        name: nickname.value,
        msg: chatInput.value
    }

    socket.emit("chatting", param)

})

socket.on("chatting", (data) => {
    
    if(data.name != nickname.value) {
        const name = data.name;
        const msg = data.msg;

        const html = `
        <div id="msgContainer">    
        <div class="chat-inner" id="DATE">
            ${name}님께서 입력하신 메세지 : ${msg}
        </div><br>
        </div>
        `

        let fragment = createElement(html)
        chatList.appendChild(fragment)

        return;
    }

    const name = data.name;
    const msg = data.msg;

    const html = `
    <div id="msgContainer">    
    <div class="chat-outter" id="null">
    ${name}님 - ${msg}
    </div><br></div>
    `

    let fragment = createElement(html)
    chatList.appendChild(fragment)
})
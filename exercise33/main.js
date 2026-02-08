// manipulating DOM


const head = document.querySelector('#head');
console.log(head)

const text = document.querySelector(".text")
console.log(text)

function changecontent () {
    head.textContent = "Rahma`s portfolio"
}

function changeElement () {
    text.innerHTML = "Rahma Nor Abdirahman <strong> software engineer </strong> "
}
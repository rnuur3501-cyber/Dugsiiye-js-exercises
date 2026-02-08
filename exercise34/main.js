// adding and removing Element


    // adding element
const list = document.querySelector("#list");


function addElement () {
    const newItem = document.createElement("li");

    newItem.textContent = 'new Item'
    
    list.appendChild(newItem)
}

    //  removing element


    
function removeElement() {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    } else {
        alert("waa dhmaate wax kale oo la delete gareeyo maleh");
    }
}

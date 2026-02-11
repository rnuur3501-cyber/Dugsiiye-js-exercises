const colorpicker = document.querySelector("#colorpicker");
const colorpreview = document.querySelector("#colorpreview");
const clearhistory = document.querySelector("#clearhistory");
const clearhistoryButton = document.querySelector("#clearhistoryButton");


colorpicker.addEventListener("change", function () {

    const selectedColor = colorpicker.value;


    colorpreview.style.backgroundColor = selectedColor;

  
    const li = document.createElement("li");
    li.textContent = selectedColor;
    li.style.color = selectedColor;

    clearhistory.appendChild(li);
});



clearhistoryButton.addEventListener("click", function () {

    if (clearhistory.lastElementChild) {
        clearhistory.removeChild(clearhistory.lastElementChild);
    } else {
        alert("History-ga waa madhan!");
    }

});

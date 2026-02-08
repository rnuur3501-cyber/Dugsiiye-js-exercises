// change image



function changeImage() {

  const image = document.querySelector("#image");

  const url = prompt("enter your url");
  
    image.setAttribute('src',url)

    // change style element

    image.style.border = prompt("enter border you want");
    image.style.width = prompt("enter width you want");
    image.style.height = prompt ("enter height you want");
    image.style.borderRadius = prompt ("enter border-radius you want")
}
// default parameter 

function calculateArea(width, height = width) {
  return width * height;
  
}

const area = calculateArea(5,6);
console.log(`The area is ${area}`);

calculateArea()



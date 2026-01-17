// spread operator

const numbers= [1,2,3];

const allNumbers = [...numbers , 4,5,6];
console.log(allNumbers);


// rest operator 

function multiply(...numbers) {
   return numbers.reduce((total, num) => total * num,1) 
}

console.log(multiply(2,4,6,2))
function operate(a,b,callback){
    return callback(a,b)
}

function multiply (a,b) {
    return a*b
}

function divide (a,b) {
    return a/b
}

console.log("multiblication: "+ operate(5,5,multiply))
console.log("divition: " + operate(30,5,divide))


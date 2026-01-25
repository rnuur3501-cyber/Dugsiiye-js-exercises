// blocking code

function fetchTimeSynch() {
    alert("times out")
    
}

console.log("starting fetching data")

const time = fetchTimeSynch() ;

console.log(time)
console.log("this message is blocked until time is fetched")



function fetchTimeAsync(callback) {
    setTimeout(() => {
        callback("Non-blocking: Time fetched after 2 seconds");
    }, 2000);
}

console.log("Starting fetching time...");

fetchTimeAsync(function(message) {
    console.log(message);
});

console.log("This message shows immediately");



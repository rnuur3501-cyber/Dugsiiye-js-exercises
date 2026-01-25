// promise

function fetchUserData () {
    return new Promise((resolve,reject) => {
         setTimeout (() => {
           const success = true ;
    
        if(success) {
         resolve({ id: 1, name: "Rahma" });
        }else {
            reject("fetch error")
        }

    },2000) 
    })
}

fetchUserData()
    .then((user) => console.log("User data:", user))
    .catch((error) => console.log("Error:", error)); 


 
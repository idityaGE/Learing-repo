//call stack
//synchronous nature of js

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

//JS is single threaded language
//asynchronous nature of js

// setTimeout(() => {
//     console.log("Good");
// }, 2000);

// setTimeout(() => {
//     console.log("morning");
// }, 2000);

// console.log("Aditya");


// callback hell
let h2 = document.querySelector("h2");

// setTimeout(()=>{
//     h2.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h2.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     h2.style.color = "green";
// },3000);

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h2.style.color = color;
//         if (nextColorChange) nextColorChange();//this line means if nextcolorchange argument is given then only run this
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("grenn", 1000);
//         });
//     });
// });
//callback nesting --> callback hell

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("sucess : color changed");
        }, delay);
    })
}

changeColor("red", 1000)
    .then((res) => {
        console.log(res);
        return changeColor("yellow", 1000);
    })
    .then((res)=>{
        console.log(res);
        return changeColor("blue",1000);
    })
    .then((res)=>{
        console.log(res);
        return changeColor("pink",1000);
    })
    .then((res)=>{
        console.log(res);
        return changeColor("green",1000);
    })
    .catch(()=>{
        console.log("failure: not changed");
    })


    
//promises

/*
function saveToData(data, sucess, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);
    if (internetSpeed > 4) {
        sucess();
    } else {
        failure();
    }
}

saveToData("Name: Aditya",
    () => {
        console.log("sucess : data is saved");
        saveToData("helo dB",
            () => {
                console.log("sucess 2 : data is saved");
                saveToData("Adii",
                    () => {
                        console.log("sucess 3 : data is saved");
                    },
                    () => {
                        console.log("failure 3 : conection is weak, data not saved");
                    });
            },
            () => {
                console.log("failure 2 : conection is weak, data not saved");
            });
    },
    () => {
        console.log("failure : conection is weak, data not saved");
    }
);
*/

//this example is also callback hell

function saveToData(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log("Internet speed : ", internetSpeed);
        if (internetSpeed > 4) {
            resolve("sucess : data is saved");
        } else {
            reject("failure : data not saved");
        }
    });
}


saveToData("Aditya")
    .then((result) => { //in above fuuction resovle("anythin...") = result
        console.log(result);
        console.log("data 1 is saved");
        return saveToData("Maurya");//this is call promise chaining
    })
    .then((result) => {
        console.log(result);
        console.log("data 2 is saved");
        return saveToData("Mau");
    })
    .then((result) => {
        console.log(result);
        console.log("data 3 is saved");
    })
    .catch((error) => {//in above fuuction reject("anythin...") = error
        console.log(error);
        console.log("promise is rejected");
    })


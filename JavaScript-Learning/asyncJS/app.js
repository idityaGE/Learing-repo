async function name() {
    // throw "some error occured"
    return "Aditya";
}

name()
    .then((e) => {
        console.log(e);
        console.log("promise was sucessfull");
    })
    .catch((e) => {
        console.log(e);
        console.log("promise was rejected");
    })



let greet = async () => {
    return "hello"
}

greet()
    .then((e) => { console.log("resolved, result: ", e); })
    .catch(() => { console.log("not found"); })



// function getRanNo(){
//     return new Promise((resolve, rejected)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo(){
//     await getRanNo();
//     await getRanNo();
//     await getRanNo();
//     getRanNo();
// }
// demo();


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, rejected) => {
        let num = Math.floor(Math.random() * 4) + 1;
        if (num > 3) {
            rejected('promise rejected');
        }
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve('color changed sucessfully');
        }, delay);
    })
}

async function change() {
    try {
        await changeColor("red", 1000);
        await changeColor("blue", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
    } catch(error){
        console.log(error);
    }

    console.log("55555555");
}
change();



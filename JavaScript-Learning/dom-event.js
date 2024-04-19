//DOM - Event


// btn.onclick = function(e){
//     console.log(e);
//     console.dir(e);
//     console.log("hello!");
// }

// btn.ondblclick = function(e){
//     console.log(e);
//     console.log("btn is double clicked");
// }

// function sayHellow(){
//     alert("hello !");
// }
// function sayName(){
//     console.log("hello !");
// }

// for(btn of btns){
//     // btn.onclick = sayHellow;
//     btn.addEventListener("click", sayHellow);
//     btn.addEventListener("click", sayName);
// }

let btns = document.querySelector("button");
console.dir(btns);

//mouse event

btns.addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
});


//keyborad event

let inp = document.querySelector("input");
console.log(inp);
inp.addEventListener("keydown", function(e){ //check out mdn for various evevt
    console.log(e);
    console.log(e.code);
    console.log("key was pressed :", e.key);
});

// inp.addEventListener("keydown", function(e){
//     console.log(e.code);
//     if(e.code == "ArrowDown"){
//         console.log("Character moved backward");
//     }
//     else if(e.code == "ArrowUp"){
//         console.log("Character moved forward");
//     }
//     else if(e.code == "ArrowRight"){
//         console.log("Character moved right");
//     }
//     else if(e.code == "ArrowLeft"){
//         console.log("Character moved left");
//     }
// });


//form event

let form = document.querySelector("form");
console.log(form);
console.dir(form);
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    // let user = document.querySelector("#username");
    // let pass = document.querySelector("#password");

    console.dir(this.elements);
    let user = this.elements[0];
    let pass = this.elements[1];
    console.dir(user);
    console.dir(user.value);
    console.dir(pass);
    console.dir(pass.value);
    console.log(`your username : ${user.value} your password : ${pass.value}`);


    
    console.log(e);
    console.log("form submited");
});

// change event (track only intial and final value)
let user = document.querySelector("#username");
user.addEventListener("change", function(){
    console.log("change value is :", this.value);
});

let pass = document.querySelector("#password");
pass.addEventListener("change", function(){
    console.log("change value is :", this.value);
});

// input event (track every change)
// let user1 = document.querySelector("#username");
user.addEventListener("input", function(){
    console.log("chnage value is :", this.value);
});

// let pass2 = document.querySelector("#password");
pass.addEventListener("input", function(){
    console.log("chnage value is :", this.value);
});
let input = document.querySelector("#input");
let addBtn = document.querySelector("#add");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let remBtn = document.querySelectorAll(".rem");



addBtn.addEventListener("click", function (e) {
    let newTask = input.value;
    // console.log(newTask);
    input.value = "";

    let newLiTag = document.createElement("li");
    newLiTag.innerText = newTask;
    ul.appendChild(newLiTag);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("rem");
    deleteBtn.innerText = "X";
    newLiTag.appendChild(deleteBtn);

});

//this will not work for newly added list item in todo app because of event delegation, in this case we use event bubling method and apply this removing method on parent element to child element
// for(btn of remBtn){
//     btn.addEventListener("click",function(){
//         let parentLi = this.parentElement;
//         parentLi.remove();
//     })
// }

ul.addEventListener('click', (e)=>{
    // console.dir(e.target.nodeName);
    if(e.target.nodeName == 'BUTTON'){
        let itemList = e.target.parentElement;
        itemList.remove();
    }
});

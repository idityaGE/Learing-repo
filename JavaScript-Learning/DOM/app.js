//DOM
console.log(document);
console.dir(document);

console.dir(document["all"]);

console.dir(document.all[8].innerText);

document.all[8].innerText = "Peter Parker";
document.all[8].innerText = "Spider Man";

console.dir(document.all[8].innerText);

//getElementById
console.dir(document.getElementById("mainImg"));
console.log(document.getElementById("mainImg"));

let imgObj = document.getElementById("mainImg");

console.log(imgObj);//it will print <img> tag
console.dir(imgObj);//it will print img#mainImg object

console.log(imgObj.src);
console.log(imgObj.id);
// imgObj.src = "Assets/Man.png"

//getElementByClassName
console.log(document.getElementsByClassName("creationDev"));

console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByClassName("oldImg")[0]);

console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[0]);

let smallImg = document.getElementsByClassName("oldImg");
console.log(smallImg);
for (let i = 0; i < smallImg.length; i++) {
    console.dir(smallImg[i].src);
}

// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].src = "Assets/Spider-Man.png";
//     console.dir(smallImg[i].src);
// }


//getElementByTagName
console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[0].innerText = 'aditya';


//querySelector
console.log(document.querySelector("p"));//select first paragraph element
console.dir(document.querySelector("p"));//select first paragraph element

console.log(document.querySelector("#mainImg"));//select by id
console.dir(document.querySelector("#mainImg"));//select by id

console.log(document.querySelector(".oldImg"));//select by class name and select only first element with this classname
console.log(document.querySelectorAll(".oldImg"));//select by class name and select only first element with this classname
console.dir(document.querySelector(".oldImg"));//select by class name

console.dir(document.querySelectorAll('.oldImg'));


//
let para = document.querySelector("p");
console.log(para);

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);


//maniputing attribute
console.log(imgObj.getAttribute("id"));
imgObj.setAttribute("id", "1st-Img");
console.log(imgObj.getAttribute("id"));

console.log(imgObj.getAttribute("class"));
imgObj.setAttribute('class', 'main-img');
console.log(imgObj.getAttribute("class"));

console.log(imgObj.getAttribute('src'));


//manipulating Style
console.log(imgObj.getAttribute("style"));
console.log(imgObj.style);

let heading = document.querySelector('#head');
console.log(heading);
console.dir(heading);
console.log(heading.style);
heading.style.color = 'green';
heading.style.backgroundColor = 'yellow';
console.log(heading.getAttribute('style'));
heading.setAttribute('style', 'color: red;');
console.log(heading.getAttribute('style'));

// let links = document.getElementsByClassName("pubInfo");
let links = document.querySelectorAll(".pubInfo a");
console.log(links);
// for(let i = 0; i <links.length; i++){
//     links[i].style.color= "yellow";
// }
for (link of links) {
    link.style.color = 'yellow';
}

// classList property
let linkBox = document.querySelector('.pubInfo');
console.log(linkBox);
console.dir(linkBox);
console.log(linkBox.style);
console.log(linkBox.classList);
linkBox.classList.add("green");
console.log(linkBox.classList);
linkBox.classList.remove("green");
console.log(linkBox.classList);
console.log(linkBox.classList.contains('green'));
console.log(linkBox.classList.toggle('green'));
console.log(linkBox.classList);

//Navigation
console.log(link.parentElement);
console.log(linkBox.parentElement);
console.log(linkBox.children);
console.log(linkBox.children[0]);
console.log(linkBox.children[1]);
console.log(linkBox.children[1].previousElementSibling);
console.log(linkBox.children[0].nextElementSibling);


//adding element on page using javascript
let newPara = document.createElement("p");
newPara.innerText = "hello !";
console.dir(newPara);
linkBox.appendChild(newPara);
newPara.append(" new text added");
newPara.prepend("new text added ");

let btn = document.createElement('button');
btn.innerText = 'click btn';
console.log(para);
para.insertAdjacentElement('beforeend', btn);

//removing element
// para.removeChild(btn);
btn.remove();
// document.querySelector('body').remove();





let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li= document.querySelectorAll("li");

div.addEventListener("click", function(e){
    console.log("div was clicked");
});

ul.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("ul was clicked");
});

for(lis of li){
    lis.addEventListener("click", function(e){
        e.stopPropagation();
        console.log("li was click");
    });
}
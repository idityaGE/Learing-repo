let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn");

async function getData(country) {
    let res = await axios.get(url + country);
    let allColl = res.data;
    return allColl;
}


btn.addEventListener("click", async () => {
    let input = document.querySelector("input");
    console.dir(input.value);
    let country = input.value;


    let ul = document.querySelector("ul");
    ul.innerText = "";
    
    
    let res = await getData(country);
    
    // console.log(res);
    
    
    for(Response of res){
        let list = document.createElement("li");
        console.log(Response.name);

        list.innerText = Response.name;
        
        ul.appendChild(list);
    }
})

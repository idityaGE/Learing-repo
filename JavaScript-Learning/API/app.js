// // JSON to JS object

// //we have to store this api data into a string like below
// let fact = '{"fact":"It may take as long as 2 weeks for a kitten to be able to hear well.  Their eyes usually open between 7 and 10 days, but sometimes it happens in as little as 2 days.","length":165}';
// console.log(fact);

// let data = JSON.parse(fact);//parse

// console.log(data.fact);

// //JS object to JSON
// let student = {
//     name: "Aditya",
//     age: 18,
//     city: "Mau"
// }

// let JSONData = JSON.stringify(student);
// console.log(JSONData);
// console.log(typeof JSONData);



let url = "https://catfact.ninja/fact";
// let dataa = fetch(url);

// console.log(dataa);

// dataa
//     .then((e) => {
//         console.log(e);
//         console.log(e.status);
//         console.log(e.body);

//         return e.json();


//         // e.json()
//         //     .then((data) => {
//         //         console.log(data);
//         //         console.log(data.fact);
//         //     }).catch((err) => {
//         //         console.log(err);
//         //     })

//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res) =>{
//         // console.log(res);
//         return res.json();
//     })
//     .then((data) =>{
//         console.log(data);
//         console.log(data.fact);
//         console.log(data.length);
//     })
//     .catch((e) => {
//         console.log(e);
//         console.log(e.status);
//     })


// console.log("I am good");


//

async function getData() {
    try {
        let res = await fetch(url); //asynchonus fuction that return promise that's why we have to wait for it to complete so we use await 
    let data = await res.json(); //asynchonus fuction that return promise that's why we have to wait for it to complete so we use await 
    console.log(data.fact);

    let res2 = await fetch(url); //asynchonus fuction that return promise that's why we have to wait for it to complete so we use await 
    let data2 = await res2.json(); //asynchonus fuction that return promise that's why we have to wait for it to complete so we use await 
    console.log(data2.fact);
    }
    catch(err){
        console.log(err);
    }
}

getData();


//using Axios

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data);
        console.log(res.data.fact);
    }
    catch(e){
        console.log("error : ", e);
    }
}

getFacts();




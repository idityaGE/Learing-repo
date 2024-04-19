async function getRanImg() {
    try {
        let response = await axios.get("https://dog.ceo/api/breeds/image/random");
        return response.data.message;
    }
    catch (e) {
        console.log(e);
        return "Can't get image";
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let imgLink = await getRanImg();
    let imgTag = document.querySelector("img");
    imgTag.attributes[0].value = imgLink;
});


// function getimg(n) {
//     try {
//         setTimeout(() => {
//             for (let i = 1; i <= n; i++) {
//                 setTimeout(async () => {
//                     let imgLink = await getRanImg();
//                     let imgTag = document.querySelector("img");
//                     imgTag.attributes[0].value = imgLink;
//                     console.log(i);
//                 },2000);
//             }
//         }, 5000);
//     }
//     catch (e) {
//         console.log("error : ", e);
//     }
// }

// getimg(10);


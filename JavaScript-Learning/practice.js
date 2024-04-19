let arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(arr);
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);


console.log('ques 2');

let number = 285587;
let count = 0;
let copy = number;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);


console.log('ques 3');


let n = 2666;
let x=0;
for (let i = 0; i<=n; i++){
    x++;
    
}


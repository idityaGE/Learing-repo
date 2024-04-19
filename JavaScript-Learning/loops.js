//loops

let i;
for (i = 2; i <= 10; i++) {
    console.log(i);
}



console.log('odd');
let o;
for (o = 1; o <= 15; o += 2) {
    console.log(o);
}




console.log('even');
let e;
for (e = 2; e <= 10; e += 2) {
    console.log(e);
}




console.log('multiple of 5');
let mlt_5;
for (mlt_5 = 5; mlt_5 <= 50; mlt_5 += 5) {
    console.log(mlt_5);
}



// console.log('logic multiple using prompt');
// let n = prompt('enter your number :');
// n = parseInt(n);
// for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
// }

console.log('nested loops');
for (let i = 1; i <= 3; i++) {
    console.log(`output in loop ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}


//while loops
console.log('while loops');
let x = 1;
while (x < 5) {
    console.log(x);
    x++;
}


// console.log('guess game');
// let favMovie = "JJK 0";
// let guess = prompt("Guess my Fav movie name :");
// while (guess != favMovie && guess != "quit") {
//     console.log('try Again');
//     guess=prompt("Try another")
// }
// if( guess==favMovie ){
//     console.log('congrates you guessed it right');
// }



console.log('break keyword');
let I = 1;
while (I <= 1000) {
    if (I == 4) {
        break;
    }
    console.log(I);
    I++;
}

// console.log('guess game');
// let favMovie = "JJK 0";
// let guess = prompt("Guess my Fav movie name :");
// while (guess != favMovie) {
//         if( guess == "quit"){
//             console.log('you quit');
//             break;
//         }
//     console.log('try Again');
//     guess=prompt("Try another")
// }
// if( guess==favMovie ){
//     console.log('congrates you guessed it right');
// }

console.log('loops in array');
let arr = ['mango', 'litchi', 'apple', 'banana', 'orange', 'papaya']
let Z = 0;
// console.log("S.no.  Index   Name ");
// for (let i = 0; i < arr.length; i++) {
//     console.log(`  ${++Z}      ${i}     ${arr[i]}`);
// }
console.log("S.no.  Index   Name ");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`  ${++Z}      ${i}     ${arr[i]}`);
}

console.log('nested array in loops');
let classGroup = [['Aditya'], ['Mohit', 'Rakesh', 'Prazwal'], ['Balram', 'Adarsh', 'Ajay', 'Prashant', 'Neeraj', 'Pradeep'], ['Sarash', 'Shiva', 'Umesh', 'Shikar', 'Sparsh']];
for (let i = 0; i < classGroup.length; i++) {
    console.log(`Group no ${i+1}`);
    for (let j = 0; j<classGroup[i].length; j++){
        console.log(j+1,classGroup[i][j]);
    }
}

let student =[['aman',95],['Shardha',98],['Aditya',99]];
for (let i=0; i<student.length; i++){
    console.log(`Name: ${student[i][0]} Marks: ${student[i][1]}`);
}

for(k of arr){
    console.log(k);
}

let v='Adii';
for(c of v){
    console.log(c);
} 

for (group of classGroup){
    console.log(group);
    for (people of group){
        console.log(people);
    }
}
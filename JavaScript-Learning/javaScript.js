console.log("Hello JavaScript !");
let a = 10;
let b = 5;
console.log(`your pay is : ${a + b} rupees.`);
console.log("your pay is :", (a + b), "rupees.");
console.log("your pay is : " + (a + b) + " rupees.");
console.log(a++);//first print a=10 and then incriment the value to a=11
console.log(a);//print the incrimented value of a
console.log(++a);//first incriment a=12 and then print a=12 
console.log(a += 5);//a value increased by 5
console.log(a -= 2);
console.log(a %= 2);
let age = 18;
console.log(age > 18);
console.log(age >= 18);
console.log(age == 18);
console.log(age != 18);
console.log(5 == "5");//here '==' it compare the value irrespective of type
console.log(5 === "5");//here '===' it compare both value and type
console.log(0 == " ");// this is also true
console.log(0 == "");// this is also true
console.log(0 == false);
console.log(null == undefined);
console.log(1 == true);
console.log('a' > 'b');
console.log('a' < 'b');//every character on keyboard have unique code like a=61 and b=62 so it compare this unique code value
age = 18;
if (age >= 18) {
    console.log('you can drive.');
    console.log('you can vote.');
    let q = 5
    console.log((q ** 2));
}
else {
    console.log("you can't vote.");
}
let firstName = "Adii";
if (firstName = "Adii") {
    console.log(`welcome ${firstName}`);
}

age = 18;
if (age >= 18) {
    console.log(`you can vote.`);
}
else if (age = 18) {
    console.log(`you can drive`);// this will not run even if its true because if statement is already true then it will not run the "else if" statement 
}


let color = "white";
if (color === 'red') {
    console.log("stop");
} else if (color === 'yellow') {
    console.log('slow down');
} else if (color === 'green') {
    console.log('you can go.');
} else {
    console.log('traffic light is broken');
}

//popcorn price
let XL = 250;
let L = 200;
let M = 100;
let S = 50;
let size = L;
if (size == XL) {
    console.log(`Popcorn price is ${XL} rupees.`);
}
else if (size == L) {
    console.log(`Popcorn price is ${L} rupees.`);
}
else if (size == M) {
    console.log(`Popcorn price is ${M} rupees.`);
}
else if (size == S) {
    console.log(`Popcorn price is ${S} rupees.`);
}

//nested if else statement
let marks = 33;
if (marks >= 33) {
    if (marks >= 80) {
        console.log('Grade : O');
    } else {
        console.log('Grade : A');
    }
}
else {
    console.log("Better Luck Next Time!")
}


console.log(!(5 < 3));


let str = 'apple';
if (str[0] === "a" && str.length > 3) {
    console.log('Good string!');
} else {
    console.log('Try another');
}


console.log(0/0);


console.log(color);
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("broken traffic light");
}
// alert("Just for fun Errrrrrrror!");


console.error("this is an intentional error! enjoy your error");
console.warn("this is an intentional error! enjoy your error");


// prompt("Enter your Name :");


// console.log(firstName);
// let lastName = prompt("enter your last name :");
// alert(lastName);
// console.log(lastName);


//practice Questions

let num=35;
if (num%10==0){
    console.log('Good');
}else{
    console.log('bad');
}


// let userName= prompt("Enter your Name :");
// let Age= prompt("Enter your age :");
// alert(`${userName} is ${age} years old.`);


let quarter=3;
switch(quarter){
    case 1:
        console.log("month in quarter 1 : January, February, March");
        break;
    
    case 2:
        console.log("month in quarter 1 : April, May, June");
        break;
    
    case 3:
        console.log("month in quarter 1 : July, August, September");
        break;
    
    case 4:
        console.log("month in quarter 1 : october, November, December");
        break;
    default:
        console.log("Try no. between 1-4")
}


let string="aditya";
if((string[0]==="a" || string[0]==="A") && string.length>5){
    console.log("Golden Sting");
}
else {
    console.log("Try another String");
}


let Z=5672;
let X=52;
if (Z%10===2 && X%10===2){
    console.log("last digit is 2");
}
else {
    console.log("last digit is not 2");
}


let l=5;
let m=9;
let n=564;
if(l>m && l>n){
    console.log(`${l} is greatest of them`);
}
else if(m>l && m>n){
    console.log(`${m} is greatest of them`);
}
else if(n>m && n>l){
    console.log(`${n} is greatest of them`);
}

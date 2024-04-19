let str = '     Hello !        ';
console.log(str);
console.log(str.trim());

let name = 'Aditya';
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.indexOf("y"));// at 4th index
console.log(name.indexOf("m"));// -1 (not found)


console.log(str);
console.log(str.toUpperCase().trim());//chaning method

let c = 'ILoveCoding';
console.log(c.slice(1, 5));//first no. is starting point and inclided but for second no. it is not included in output string, letter before the secong index no. is printed
console.log(c.slice(5));
console.log(c.slice(-3));// str.length-3 = 11-3 = 8,  str[8]= 'i', so answer is 'ing'.
console.log(c.length);

console.log(c.replace('o', 'x'));
console.log(c.replace("Love", "Do"));

console.log(c.repeat(5));


let study = 'apnacollege';
console.log(study.slice(4).replace('l', 'T').replace('l', 'T'));


let students = ["Aditya", "Adarsh", "Ajay", "Neeraj", 2];//Array index start from 0
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[0].length);
console.log(students[0].toUpperCase());
console.log(typeof students);
console.log(typeof students[4]);
console.log(students[0][students[0].length - 1].toUpperCase());//chaning method is used
students[2] = 'Mohit';//Array are mutable (means it can be changed unlike string)
console.log(students);
console.log(students[1].replace('ar', 'or'));
students[10] = "Ajay";
console.log(students);
console.log(students[5]);
console.log(typeof students[5]);
students[students.length] = 'Aryan';
console.log(students);


let empArr = [null];
console.log(empArr.length);
console.log(empArr);
console.log(typeof empArr[0]);


let empArry = [];
console.log(empArry.length);
console.log(empArry);

let car = ["audi", "bmw", "toyota", "xuv"];
console.log(car);
car.push("ferari");
console.log(car);
console.log(car.pop());//this pop method return this value that we can store in any other variable
console.log(car);
car.unshift('gtr');
console.log(car);
car.unshift('buggati');
console.log(car);
car.shift();//this shift method return this value that we can store in any other variable
console.log(car);

//see this real life problem
let follower = ["Priyanshu", "Suraj", "Raman", "Amar", "Sujeet"];
console.log(follower);
let blocked = follower.pop();
console.log(follower);
console.log(blocked);
console.log(follower.indexOf("Suraj"));
console.log(follower.indexOf("Vineet"));//doesn't found in the list so it return -1
console.log(follower.includes("Priyanshu"));
console.log(follower.includes("raman"));//case sensitive
let newArry = car.concat(follower);//merge to array
console.log(newArry);
follower.reverse();//reverse the sequence of an array
console.log(follower);
console.log(follower.slice());//create an copy of array and we can store them in another array
let follwing = follower.slice();
console.log(follwing);
console.log(follower.slice(2, 3));
console.log(follower.slice(-1));


let color = ['red', 'yellow', 'blue', "orange", 'pink', 'white'];
console.log(color);
console.log(color.splice(4));
console.log(color);
console.log(color.splice(0, 1));//second no. is delete count not ending index
console.log(color);
color.splice(0, 0, "red", "green", "pink");//remember this second no. is delete count not ending index
console.log(color);
color.splice(2, 0, "wheat", "aqua");//by using this method we can add element in middle of array
console.log(color);

const con = [1, 2, 3, 4, 5];
con.push(1);//we can perform opertions on elements of this array
console.log(con);
console.log(con.pop());
console.log(con);
// con=color;//but we can't assign a new array to this array "arr"


//Nested array {multi dimensional array}
let nesArr = [[1, 1], [2, 4], [3, 9], [4, 16]];
console.log(nesArr);
console.log(typeof nesArr);
console.log(nesArr[2]);
console.log(nesArr[2][1]);
console.log(nesArr[2].push(27));
console.log(nesArr);
console.log(nesArr[1][2]);

let tic_tac_toe = [['X', '', 'O'], ['', 'X', ''], ['O', '', 'X']];
console.log(tic_tac_toe);
tic_tac_toe[0][1] = 'O';
console.log(tic_tac_toe);

//practice js part 3
let Q = [5, 2, 3, 9, 7, 1, 4, 8];
//1
//print first n number
let n = 3;
console.log(Q.slice(0, n));
//2
//print last n number
let N = 3;
console.log(Q.slice(-N));


//3
let S = "";
if (S.length == 0) {
    console.log('string is empty');
}
else {
    console.log('string is not empty');
}

//4
let L = ["a", "B", "j", "N", "I", "k", "a"];
let x = 6;//index
if (L[x] === L[x].toLowerCase()) {
    console.log(`letter at ${x} index is lower case`);
}
else {
    console.log(`letter at ${x} index is not lower case`);
}

//5
let Sp = '       Aditya Maurya      ';
console.log(Sp);
console.log(Sp.trim());

//6
let M = [2, 8, 4, 7, 2, 8, 2, 3, 9];
let y = 2;
if (M.includes(y) == true) {
    console.log(`"${y}" exist in array`);
} else {
    console.log(`"${y}" doesn't exist in array`);
}
function print1to10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

print1to10();


function rollDice() {
    let ran = (Math.floor(Math.random() * 6) + 1);
    console.log(ran);
}

rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


function perInfo(name, age) {
    console.log(`${name} is ${age} years old.`);
}

perInfo('Aditya', 18);
perInfo(18);
perInfo("Aditya");//order matter for arguments 

function sum(a, b) {
    console.log(a + b);
}
sum(3, 6);

function average(a, b, c) {
    console.log((a + b + c) / 3);
}

average(5, 5, 5);


function numMulti(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}

numMulti(2);
numMulti(13);
numMulti(55);


let obj = {
    name: "Aditya",
    age: 18,
    city: "Mau"
}
for (key in obj) {
    console.log(`${key}::::::${obj[key]}`);
}


function m(a, b) {
    return a + b;
    // console.log(hello!);//code after return will not excute
}
m(1, 2);//this will not print anything because cgl is not used in function

console.log(m(1, 2));//we have to use cgl to print the return value

console.log(m(m(1, 2), m(1, 2)));//nested function



function isAdult(age) {
    if (age >= 18) {
        return "adult";
    }
    else {
        return "not adult";
    }
}

console.log(isAdult(18));

console.log("add");

function sumOfnnumber(n) {
    let C = 0;
    for (let i = 1; i <= n; i++) {
        C = C + i;
    }
    return C;
}

console.log(sumOfnnumber(10));
console.log(sumOfnnumber(100));
console.log(sumOfnnumber(1000));



console.log("concat array to string");

let arr = ["Aditya ", "is ", 18, " year ", "old."];

function arrTostring(arrr) {
    let str = "";//function scope
    for (let i = 0; i < arrr.length; i++) {
        str += arrr[i];
    }
    return str;
}

console.log(arrTostring(arr));



for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(i);//var can be accessed even outside the block


const sumOf = function (a, b) {
    return a + b;
}
console.log(sumOf(1, 9));
// sumOf(1,8); cgl is not used inside the function


let heloo = function () {
    console.log("Hello!");
}
heloo();
console.log(heloo);
heloo = function () {
    console.log("namaste");
}
heloo();

//methods
const calcu = {
    sum: function (a, b) {
        return a + b;
    },
    //sum(a,b){
    // return a+b;
    // },

    sub: function (a, b) {
        return a - b;
    },

    multi: function (a, b) {
        return a * b;
    },

    div: function (a, b) {
        return a / b;
    },

    remi: function (a, b) {
        return a % b;
    },

    power: function (a, b) {
        return a ** b;
    }
}

console.log(typeof calcu.sum);
console.log(typeof calcu);
console.log(calcu.sum(3, 5));
console.log(Math.abs(calcu.sub(3, 5)));
console.log(calcu.multi(3, 5));
console.log(calcu.div(3, 5));
console.log(calcu.power(3, 5));

console.log(Math);
console.log(Math.floor(0.7));


//input a function
function multiple(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

function greet() {
    console.log("nameste");
}

multiple(greet, 4);



//return a function
function oddOrEventest(request) {
    if (request = "even") {
        let Even = function (n) {
            console.log((n % 2 == 0));
        }
        return Even;
    }

    else if (request = "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }

    else {
        console.log("wrong request");
    }

}

let even = "even";
let fu = oddOrEventest(even);
console.log(fu);
fu(3);
fu(4);




// "this" key word in javascript

const student = {
    name: "Aditya",
    age: 18,
    city: "Mau",
    math: 90,
    science: 94,
    social: 96,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.science + this.social) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

console.log(student);
student.getAvg();


console.log(this);//this will print window object


//try and catch

console.log("hello");
console.log("hello");
try {
    console.log(a);// "a" is not defined, this throw an error
}
catch (err) {
    console.log('caught an error "a" is not defined"');
    console.log(err);
}
console.log("hello1");
console.log("hello1");
console.log("hello1");


// Arrow function 

const summ = (a, b) => { console.log(a + b); }
summ(5, 6);
console.log(summ);


let cube = n => { console.log(n * n * n); }
cube(6);
console.log(cube);


//Implicit Return in Arrow function

const squr = n => (n * n)//remeber curly braces are not used in this situation
console.log(squr(5));
console.log(squr);



//setTimeout  

// setTimeout(() => { console.log("Aditya Boom"); }, 5000);


//setInterval 


// let id = setInterval(() => { console.log("Aditya"); }, 2000);
// setTimeout(() => {clearInterval(id);},10000);


//this in Arrow Function

const st = {
    name: "Aditya",
    marks: 96,
    city: "Mau",
    prop: this,//this is for windows object //global scope
    getName() {
        console.log(this); // this is for calling object
        return this.name; // scope is calling object which is "st" object
    },
    getCity: () => {
        console.log(this);// here this is for parent's scope which is global scope
        return this.city;// here this is for parent's scope which is global scope
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);//st
        }, 1000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);//window
        }, 1000);
    }
}

console.log(st);
//function expression
console.log(st.getName());
st.getName();

//Arrow function
console.log(st.getCity());
st.getCity();

st.getInfo1();//here arrow function is used and its parent's scope is function scope. so it will call its "st" object (parent ko call lagane wali object)

st.getInfo2();//here fuction expression is used so in this case "this" will print it calling object scope which is setTimeout which is global scope (jo object use call laga rahi h)




const thisInArrow = {
    getInfo: function () {
        console.log(this);
    },
    getInfo1: () => {
        console.log(this);
    }
}

thisInArrow.getInfo(); // this will print its calling object = thisInArrow

thisInArrow.getInfo1(); // this will print its parent scope's object = window

//practice Questions

//1
let sq = n => (n * n);

console.log(sq);
console.log(sq(4));

//2
let f = setInterval(() => {
    console.log("MC");
}, 2000);

setTimeout(() => {
    clearInterval(f)
}, 10001);



// Array Method


//forEach
let arrr = [1, 2, 3, 4, 5, 6];
for (element of arrr) {
    console.log(`${element}`);
}
arrr.forEach((el) => { console.log(el); });

//map
let newArrr = arrr.map(function (el) {
    return el * 2;//double each element
});
console.log(newArrr);
console.log(newArrr[2]);

//filter
let num = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let eveen = num.filter((el) => (el % 2 == 0));//even ---> true %% odd ---> false
console.log(eveen);//only true value will be stored

//every
//return ture if every element is true for given function or condition
let isEven = [1, 2, 3, 4, 6].every((n) => (n % 2 == 0));
console.log(isEven);//return false bcoz every element should be completely divisible by 2

let isOdd = [1, 3, 7, 5].every((n) => (!(n % 2 == 0)));
console.log(isOdd);

//some
//return false if every element is false for given function or condition
let isEveen = [1, 2, 3, 4, 6].some((n) => (n % 2 == 0));
console.log(isEveen);//if single element will return true this final value will be true

let isEEven = [1, 3, 7, 5].some((n) => ((n % 2 == 0)));
console.log(isEEven);

//reduce
let doublesumOfAll = [1, 2, 3, 4].reduce((sum, el) => (sum += el * 2));
console.log(doublesumOfAll);//(accumulator,element) ---> (sum,el) //intially acc. value is 0.

//Maximum in Array
let ar = [1, 4, 5, 9, 3, 6, 8, 7, 99];
//method 1
let max = -1;
for (let i = 0; i < ar.length; i++) {
    if (max < ar[i]) {
        max = ar[i];
    }
}
console.log(max);

//method 2
let maxx = ar.reduce((max, el) => {
    if (max < el) {
        return el;
    }
    else {
        return max;
    }
});
console.log(maxx);


//practice question
//multiple of 10
let mul = [10, 5, 20, 50, 80, 60];
let res = mul.every((el) => el % 10 == 0);
console.log(res);

//minmum no in array
function getMin(arr) {
    let min = arr.reduce((min, el) => {
        if (min < el) {
            return min;
        }
        else {
            return el;
        }
    })
    console.log(min);
}
getMin(mul);

//Default Parameters
function funct(a, b = 3) {//default paramerter is usually assigned to last argument  
    console.log(a + b);
}
funct(5);//a=5, b=3(default set) ---> 5+3=8

//spread 
console.log(...mul);
console.log(Math.max(...mul));

console.log(..."Aditya");

let b = [4, 4, 9, 1];
let c = [0, 6, 0, 6];
console.log(b.concat(c));
let n = [...b, ...c];
console.log(n);

let namee = [..."Aditya"];
console.log(namee);

let g = {
    email: "adi@gmail.com",
    password: 4491
};
let gCopy = {
    ...g,
    id: 123,
    countary: "India"
};
console.log(gCopy);
console.log(...gCopy["email"]);

let h1 = { ...b };//array "b" will be converted into object and key will be its index
console.log(h1);

let h2 = { ..."Aditya" };//string will be converted ointo obkect and key will be its index
console.log(h2);

//Rest
function getSum(msg, ...args) {//this "...args" can take infinte no. of arguments and convert it into array
    console.log(msg);//first argument will be assigned to "msg" irrespective of type

    let min = args.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    })
    console.log("minimum value in given arguments is :", min);

    for (let i = 0; i < args.length; i++) {
        console.log("you gave us : ", args[i]);
    }

    return args.reduce((sum, el) => sum + el);
}
console.log(getSum(5555555555, 1, 5, 6));//here first argument will be assigned to "msg"

//argument 
function getSumm(...args) {
    console.log(arguments);//here this "arguments" key word will collect all arguments and here it will print all arguments into an array but its not actually an array and can't perform array method on this "arguments" key word
}
getSumm(1, 5, 32, 3, 5);

//Destructuring
let player = ["Aditya", "odarsh", "Mohit", "Podeep", "Posant", "Nerroj"]
let [winner, gandu, ...chutiya] = player;
console.log(winner);
console.log(chutiya);//store the rest of value in new Array

//Destructuring in Object
const ccc = {
    name: "Aditya",
    age: 18,
    city: "mau",
    gender: "Male"
};

let { gender, age } = ccc;
console.log(gender);
console.log(age);

let { name: nam, city: saher } = ccc;
console.log(nam);
console.log(saher);





//practice question from pdf

//1
let q1 = [2, 4, 5, 9];
let q11 = q1.reduce((sum, el) => { return sum += el ** 2 });
console.log(q11);
console.log(q11 / q1.length);

//2
let q2 = [1, 56, 2, 77, 5];
let q22 = q2.map((el)=>el+5);
console.log(q22);

//3
let q3 = ["Aditya", "odarsh", "Mohit", "Podeep", "Posant", "Nerroj"];
let q33 = q3.map((str)=> str.toUpperCase());
console.log(q33);

//4
function doubleAndReturnArgs(arr,...args){
    let newArr = [...arr]
    let doubleOfArgs = args.map((el)=>el+el)
    return newArr.concat(doubleOfArgs);
}
console.log(doubleAndReturnArgs([1,4,6],3,5));
console.log(doubleAndReturnArgs([1],2,3));

//5
megaObject = (obj1,obj2) => {
    let megaObject = {...obj1,...obj2};
    return megaObject;
}
let q5 = {
    name: "Aditya",
    age: 18,
    city: "mau",
    gender: "Male"
};
let q55 = {
    email: "adi@gmail.com",
    password: 4491
}

console.log(megaObject(q5,q55));





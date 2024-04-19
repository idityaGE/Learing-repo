let student = {
    Name: "Aditya",
    Age: 18,
    City: "Mau",
};

for(key in student){
    console.log(`${key} : ${student[key]}`);
}



console.log(student);
console.log(typeof student);
student.Gender = "male";
console.log(student.Name);
console.log(student["Name"]);
console.log(student);
student["Skills"] = ["C", "HTML5", "CSS", "JAVASCRIPT"];
console.log(student);

let username = "Name";
console.log(student[username]);

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "c"
};//keys (like 1,2,null,true,undefined) they all converted into string 
console.log(obj);
console.log(obj[1]);
console.log(obj[null]);
obj.true = "flase";
console.log(obj.true);
delete obj.null;
console.log(obj);


const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },

    shradha: {
        grade: "A",
        city: "Pune"
    },
    Aditya: {
        grade: "0",
        city: "Mau"
    }
}

for(keys in classInfo){
    console.log(keys,classInfo[keys]);
}

console.log(classInfo);
console.log(classInfo.Aditya.city);
classInfo.Aditya.city = "Ajmer";
console.log(classInfo.Aditya.city);


const arrInfo = [
    {
        Name: "aman",
        grade: "A+",
        city: "Delhi"
    },

    {
        Name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        Name: "Aditya",
        grade: "0",
        city: "Mau"
    }
];


console.log(arrInfo);
console.log(arrInfo[2]);
console.log(arrInfo[2].Name);
arrInfo[2].Name="Ajmer";
console.log(arrInfo[2].Name);

for(element of arrInfo){
    console.log(element);
    for( keys in element){
        console.log(keys, ":", element[keys]);
    }
}



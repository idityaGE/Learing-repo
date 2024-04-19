let todo = [];

let req = prompt("please enter your request :");

while (true) {
    if (req == "quit") {
        console.log("Quitting app");
        break;
    }

    if (req == "add") {
        let task = prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }

    else if (req == "list") {
        console.log("-------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }

    else if (req == "delete") {
        let idx = prompt("enter the task no. you that you want delete :");
        // idx = parseInt(idx);
        todo.splice(idx, 1);
        console.log("task deleted");
    }

    else {
        console.log("enter correct request");
    }
    req = prompt("please enter your request :")
}
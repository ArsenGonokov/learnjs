'use strict';
// let rocket;
// rocket = "buran";
// console.log (rocket);

// console.log("вася"[0].toUpperCase());

// let usFirst = str[0].toUpperCase() + str.slice(1);

function usFirst(str){
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(usFirst("вася"));

    let constList = {
        "Create a Task": "In progress",
        "Make a bed": "Done",
        "Write a poste": "To Do",
    } 
    function changeStatus (currentStatus) {
        if (currentStatus==constList["Make a bed"])
        console.log(constList["Make a bed"]);
    }
    function addTask (newTask) {
        constList.newTask=["Have a walk"];
        if (newTask==constList["Create a Task"])
        console.log(constList.newTask);
    }
    function deleteTask (deletedTask) {
        delete constList.deletedTask;
        if (deletedTask==constList["Make a bed"])
        console.log(constList.deletedTask);
    }
    function showList (displayTasks) {
        if (displayTasks==constList["Create a Task"])
        console.log(constList["Create a Task"]);
   
    }
    
    changeStatus("Done");
    addTask("In progress");
    deleteTask("Done");  
    //console.log(Object.values(constList))
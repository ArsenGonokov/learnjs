"use strict";
// let admin;
// let name;

// name = "Джон";

// admin = name;

// alert( admin ); 

// let earth;  // ourPlanetName
// let currentUser; //currentUserName

// let message = prompt ("Какое официальное название JS?", " ");
 
// if (message == "ECMAScript") {
// alert ("А ты хорош!");
// } else { 
// alert ("Надо подучить мат часть братик!");
// }


// function calc (math, a, b){
//     if (typeof math !== "string" || typeof math === "" || typeof !a === "number" || typeof !b === "number") {
//         console.log("Error");
//     }
//     if (math == 'sum') {
//         console.log (a + b);
//     }
//     if (math == 'sub') {
//         console.log (a-b);
//     }
//     if (math == 'multi') {
//         console.log (a*b);
//     }
//     if (math == 'div') {
//         if (b == 0){
//             console.log ('На ноль делить нельзя сука!')
//         } else {
//             console.log (a/b);
//         }  
//     }
//     if (math === null) {
//         console.log ("Введите корректное значение!")
//     }

// }
// calc('sum', 3, 3);
// calc('sub', 3, 2);
// calc('div', 6, 2);
// calc('multi', 2, 2);
// calc('div', 2, 0);
// calc(null || null || null);
// calc();`


// function calc (math, a, b) {

//     switch (math) {
//         case "sum": 
//         console.log(a+b);
//             break;
//         case "sub":
//             console.log(a-b);
//             break;
//         case "div":
//             console.log(a/b);
//             break;
//         case "div0":
//             console.log("Делить нельзя хуйло!");
//             break;
//         case "multi":
//             console.log(a*b);
//             break;
//         default:
//             console.log("ХЗ что за хуйню ты хочешь?");
//         }
// }
// calc('sum', 10, 2);
// calc('sub', 5, 2);
// calc('div', 8, 2);
// calc('multi', 5, 2);
// calc('div0', 2, 0);
// calc(null || null || null);
// calc();


    // let operations = {
    //     addition:"sum",
    //     subtraction:"sub",
    //     multiplication:"mult",
    //     division:"div"
    // };

    // function calc (operation, a, b){
    //     if (typeof operation !== "string" || typeof operation === "" || typeof !a === "number" || typeof !b === "number") {
    //         console.log("Errorrrrrrr!");
    //     }
    //     if (operation == operations.addition){
    //         console.log (a+b);
    //     }
    //     if (operation == operations.subtraction){
    //         console.log (a-b);
    //     }
    //     if (operation == operations.multiplication){
    //         console.log (a*b);
    //     }
    //     if (operation == operations.division){
    //         if (b==0){
    //             console.log ("На ноль делить нельзя!");
    //         } else {
    //             console.log (a/b);
    //         }            
    //     }
    // }
    // calc(operations.addition, 2, 2);
    // calc(operations.subtraction, 2, 2);
    // calc(operations.multiplication, 2, 3);
    // calc(operations.division, 10, 2);
    // calc(operations.division, 3, 0);
    // calc(null || null || null);
    // calc();

    /*let constList = {
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
    // console.log(Object.values(constList))
    */
    
    // let message = "м\nа\nр\nа\nф\nо\nн";
    // function showVerticaMessage (message){
    //     if (message[0]=="м")
    //     console.log (message[0].toUpperCase() + message.slice(1));
    //     if (message.length > 10)
    //     console.log(message.substr(0,10));
    // }
    // showVerticaMessage(message);
    

    // function showVerticaMessage (verticalWord) {
    //     if (verticalWord[0]==verticalWord[0].toLowerCase()) {
    //         verticalWord=verticalWord[0].toUpperCase() + verticalWord.slice(1);
    //     }
    //     if (verticalWord.length>10) {
    //         verticalWord=verticalWord.slice(0, 10);
    //     }
    //     for (let i=0; i<verticalWord.length; i++ ) {
    //         console.log(verticalWord[i]);
    //     }
    // }
    // showVerticaMessage("марафонvfhfs;klfjv;lkdjhfv");

    // let constList = [
    //     {   id:0,
    //         name: "createPost",
    //         status: "toDo",
    //         priority:"low"
    //     },

    //     {   id:1,
    //         name: "makeBad",
    //         status: "Done",
    //         priority:"high"
    //     }
    // ]

    //     console.log(constList.length);

    // function newTask (newTask) {
    //     if (newTask=="newTask")
    //     constList.push({id:2, name:"newTask"});
    //     console.log("addToArr");
    //     console.log(constList.length);
    // }
    // function deletedTask (taskName) {
    //     if (taskName==constList.name)
    //     constList.splice(1,1);
    //     console.log("deleteddTask");
    //     console.log(constList.length);
    // }
    // function changeStatus (currentStatus) {
    //     if (currentStatus==constList[0].status)
    //     console.log("Sdelano");
    //     console.log(constList.length);
    // }
    // newTask("newTask");
    // deletedTask("makeBad");
    // changeStatus("toDo");

//     const array = [1, 2, 3, 4, 5];

// const a = array.filter(function(item, index) {
//   if (item % 2 == 0) {
//     return false;
//   }

//   return true;
// });


// let constList = [
//     {   id:1,
//         name: "createPost",
//         status: "toDo",
//         priority:"low"
//     },

//     {   id:2,
//         name: "makeBad",
//          status: "Done",
//          priority:"high"
//     }
// ];

// function addTask (taskName) {
//     constList.push({
//         id:0,
//         name: taskName,
//         status: "toDo",
//         priority: "low",
//     });
// }
// function deleteTask (taskName) {
//     constList = constList.filter(function(item){
//         if (taskName == item.name){
//             return false;
//         }
//         return true;
//     });
// }

// function changeStatus (taskName, status) {
//     constList.map(function(item){
//         if (taskName == item.name){
//             constList.addTask = "Done";
//             return true; 
//         }

//     });
// }

// function changePriority (taskName, priority) {

// }


// addTask ("May the Force be with you");
// addTask ("wake up, Neo");
// deleteTask("wake up, Neo");
// changeStatus("May the Force be with you", "toDo")


// console.log(constList);

let arr = [1, 2, 3, 4, 5];
function arraySum (array) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);


  
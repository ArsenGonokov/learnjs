'use strict';
// let rocket;
// rocket = "buran";
// console.log (rocket);

// console.log("вася"[0].toUpperCase());

// let usFirst = str[0].toUpperCase() + str.slice(1);

// function usFirst(str){
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(usFirst("вася"));

//     let constList = {
//         "Create a Task": "In progress",
//         "Make a bed": "Done",
//         "Write a poste": "To Do",
//     } 
//     function changeStatus (currentStatus) {
//         if (currentStatus==constList["Make a bed"])
//         console.log(constList["Make a bed"]);
//     }
//     function addTask (newTask) {
//         constList.newTask=["Have a walk"];
//         if (newTask==constList["Create a Task"])
//         console.log(constList.newTask);
//     }
//     function deleteTask (deletedTask) {
//         delete constList.deletedTask;
//         if (deletedTask==constList["Make a bed"])
//         console.log(constList.deletedTask);
//     }
//     function showList (displayTasks) {
//         if (displayTasks==constList["Create a Task"])
//         console.log(constList["Create a Task"]);
   
//     }
    
//     changeStatus("Done");
//     addTask("In progress");
//     deleteTask("Done");  
//     //console.log(Object.values(constList))


//     let todos = [];

// function addTask(taskName) {
//   todos.push({
//     id: 1,
//     name: taskName,
//     status: 'To Do',
//     priority: 'low',
//   });
// }

// function deleteTask(taskName) {
//   // найти объект в массиве у которого свойство name равно taskName
//   // как-то избавиться от этого объекта

//   todos = todos.filter(function(item) {
//     if (taskName == item.name) {
//       return false;
//     }

//     return true;
//   });
// }

// function changeStatus(taskName, status) {
//   // найти объект в массиве у которого свойство name равно taskName
//   // поменять свойство status у этого объекта на status
// }

// function changePriority(taskName, priority) {
//   // найти объект в массиве у которого свойство name равно taskName
//   // поменять свойство priority у этого объекта на priority
// }

// addTask('wake up, neo');
// addTask('have a breakfast');

// deleteTask('wake up, neo')

// console.log(todos);




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


function arrayAvarage (a) {  
  let getAvarage = 0;
    for (let i=0; i<a.length; i++) {
        getAvarage = a[i]+getAvarage;
    }
    console.log(getAvarage/a.length);
}
arrayAvarage([1, 2, 3, 4, 5, 6]);
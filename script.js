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

    // let constList = {
    //     "Create a Task": "In progress",
    //     "Make a bed": "Done",
    //     "Write a poste": "To Do",
    // } 
    // function changeStatus (currentStatus) {
    //     if (currentStatus==constList["Make a bed"])
    //     console.log(constList["Make a bed"]);
    // }
    // function addTask (newTask) {
    //     constList.newTask=["Have a walk"];
    //     if (newTask==constList["Create a Task"])
    //     console.log(constList.newTask);
    // }
    // function deleteTask (deletedTask) {
    //     delete constList.deletedTask;
    //     if (deletedTask==constList["Make a bed"])
    //     console.log(constList.deletedTask);
    // }
    // function showList (displayTasks) {
    //     if (displayTasks==constList["Create a Task"])
    //     console.log(constList["Create a Task"]);
   
    // }
    
    // changeStatus("Done");
    // addTask("In progress");
    // deleteTask("Done");  
    // console.log(Object.values(constList))
    
    
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


// let arr = [1, 2, 3, 4, 5];
// function arraySum (array) {
//     let sum = 0;
//     for (let i=0; i<arr.length; i++) {
//         sum = sum + array[i];
//     }
//     console.log(sum);
// }
// arraySum(arr);


// let array = [1, 2, 3, 4, 5, 6, 7];
// let a = 2;
// function visibleNumber (arr, number) {
//     let b = [];
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] %number == 0) {
//             b.push(arr[i]);
//         }
//     }
//     console.log(b);
// }

// visibleNumber(array, a);




let toDoList = [
  {
    id: 1,
    name: "createPost",
    status: "toDo",
    priority: "low",
  },
  {
    id: 2,
    name: "makeBad",
    status: "done",
    priority: "high",
  }
]
function addTask(taskName){
  toDoList.push({
    id: 3,
    name: taskName,
    status: "inProgress",
    priority: "low",
  });
}
function changeStatus(taskName, status) {
  toDoList.map((item) => {
    if (item.name === taskName) {
      item.status = status;
      return true;
    }
    return false;
  });
}
function changePriority(taskName, priority) {
  toDoList = toDoList.map((item) => {
    if (item.name === taskName) {
      return {
        ...item,
        priority,
      };
    }
    return item;
  });
}
function deleteTask(taskName) {
  toDoList.findIndex(function(item){
      if (item.name === taskName){
          toDoList.splice(taskName, 1);
          return true;
      }
      return false;
  });
  toDoList = toDoList.filter(function(item) {
    if (item.name !== taskName) {   
      return true;
    }
      return false;
  });
}
function showList () {
  let toDo = "";
  let inProgress = "";
  let done = "";
  for (let item of toDoList) {
    if (item.status === "toDo") {
      toDo += "\"" + item.name + "\"" + "\n"; 
    }

    if (item.status === "inProgress") {
      inProgress += "\"" + item.name + "\"" + "\n"; 
    }

    if (item.status === "done") {
      done += "\"" + item.name + "\"" + "\n"; 
    }
  }

  if (toDo == '') {
    toDo = '  -' + '\n';
  }
  if (inProgress == '') {
    inProgress = '  -' + '\n';
  }
  if (done == '') {
    done = '  -' + '\n';
  }

   console.log('To Do:\n' + toDo + 'In Progress:\n' + inProgress + 'Done:\n' + done)
}

function showBy (groupBy) {
  let toDo = "";
  let inProgress = "";
  let done = "";
  let high = "";
  let low = "";
  for (let item of toDoList) {

    if (item.status === "toDo") {
      toDo += "\"" + item.name + "\"" + "\n"; 
    }
    if (item.status === "inProgress") {
      inProgress += "\"" + item.name + "\"" + "\n"; 
    }
    if (item.status === "done") {
      done += "\"" + item.name + "\"" + "\n"; 
    }

    if (item.priority === "high") {
      high += "\"" + item.name + "\"" + "\n"; 
    }
    if (item.priority === "low") {
      low += "\"" + item.name + "\"" + "\n"; 
    }

  }
    if (toDo == '') {
      toDo = '  -' + '\n';
    }
    if (inProgress == '') {
      inProgress = '  -' + '\n';
    }
    if (done == '') {
      done = '  -' + '\n';
    }

    if (high == '') {
      high = '  -' + '\n';
    }
    if (low == '') {
      low = '  -' + '\n';
    }

    console.log('To Do:\n' + toDo + 'In Progress:\n' + inProgress + 'Done:\n' + done + 'high:\n' + high + 'low:\n'+ low)
}
  


// addTask("newTask");
// changeStatus("createPost", "medium");
// changePriority("newTask", "high");
// deleteTask("createPost");
showList();
showBy("priority");



console.log(toDoList);



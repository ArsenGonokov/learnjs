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





let todoList = [
  {
    id: 1,
    name: "createPost",
    status: "toDo",
    priority: "low",
  },
  {
    id: 2,
    name: "test",
    status: "Done",
    priority: "high",
  }
]

function addTask(taskName) {
  todoList.push({
    id: 3,
    name: taskName,
    status: 'inProgress',
    priority: 'low',
  });
}

//   function changeStatus(task, status) {
//     todoList[task] = status;
//   }

function deleteTask(taskName) {
  todoList.findIndex(function(item){
      if (item.name === taskName){
          todoList.splice(taskName, 1);
          return true;
      }
      return false;
  });
  todoList = todoList.filter(function(item) {
    if (item.name !== taskName) {   
      return true;
    }
      return false;
  });
}

function changePriority(name, priority) {
  todoList = todoList.map((item) => {
    if (item.name === name) {
      return {
        ...item,
        priority,
      };
    }
    return item;
  });
}

function changeStatus(name, status) {
  todoList.map((item) => {
    if (item.name === name) {
      item.status = status;
      return item;
    }
    return item;
  });
}

function showList() {
  let todo = '';
  let inProgress = '';
  let done = '';
  for (let newTask in todoList) {
    if (todoList[newTask] == 'To Do') {
      todo += todoList.push({
        id: 3,
        name: newTask,
        status: 'Well Done',
        priority: 'medium'
      });
    }
    if (todoList[newTask] == 'To Do') {}
  }
}

addTask('newTask')
changePriority('createPost', 'high')
deleteTask('t');
changeStatus('create a post', 'Done')

console.log(todoList);
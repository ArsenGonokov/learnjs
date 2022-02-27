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


function calc (math, a, b){
    if (math == 'sum') {
        console.log (a + b);
    }
    if (math == 'sub') {
        console.log (a-b);
    }
    if (math == 'multi') {
        console.log (a*b);
    }
    if (math == 'div') {
        if (b == 0){
            console.log ('На ноль делить нельзя сука!')
        } else {
            console.log (a/b);
        }  
    }
    if (math == null) {
        console.log ("Введите корректное значение!")
    }
    if (math == undefined) {
        console.log ("Что черт возьми ты такое делаешь?")
    } 

}
calc('sum', 3, 3);
calc('sub', 3, 2);
calc('div', 6, 2);
calc('multi', 2, 2);
calc('div', 2, 0);
calc(null || null || null);
calc(undefined || undefined || undefined)

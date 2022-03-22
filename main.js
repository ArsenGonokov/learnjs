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


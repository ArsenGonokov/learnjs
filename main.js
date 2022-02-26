let rocket;
rocket = "buran";
console.log (rocket);


function calc (math, a, b){
    if (math == 'sum') {
        console.log (a + b);
    }
    if (math == 'sub') {
        console.log (a-b);
    }
    if (math == 'div') {
        if (b == 0){
            console.log ('На ноль делить нельзя сука!')
        } else {
            console.log (a/b);
        }
        
    }
    if (math == 'multi') {
        console.log (a*b);
    }
}
calc('sum', 3, 3);
calc('sub', 3, 2);
calc('div', 6, 2);
calc('multi', 2, 2);
calc('div', 2, 0);
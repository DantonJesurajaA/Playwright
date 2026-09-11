function add(a,b)
{

    return a+b;

}


console.log(add(2,3));

//Anonymous functions

let sum = function (c,d)
{

    return c+d;
}

console.log(sum(2,4));

//Or a simple way to declare anonymous function is this

let sum1 = (c,d)=> c+d;

console.log(sum1(3,4));





//Understanding scope of var and let

//var has global scope if declared globally or has a function scope if declared within a function

var a=5;

if(true){

    var a=6;
}

function change(){

    var a=7;
}

console.log(a);


//Now lets try the same with let

let b=5;

if(true){

    let b=6;

    console.log("Inside if statement "+b)
}

function change(){

    let b=7;

    console.log("Inside the function block "+b);
}
change();
console.log("Global scope "+b);
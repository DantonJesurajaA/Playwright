let a='Danton Jesuraja';

console.log("Length of the string is:"+a.length);

let b = a.split(" ");

console.log("First name is:"+b[0]);

console.log("Last name is:"+b[1]);

let sub = b[1].slice(0,4);

console.log(sub);

let num1='23';

let num2='25';

let num3 = parseInt(num1)+parseInt(num2);

console.log(num3);

console.log(a);

let index = a.indexOf('J');

console.log(index);

let str1="SIT=https.google.com?signin=native"

//We need do get the URL from the above string

let index1=str1.indexOf("=");

let substr = str1.slice(index1+1,str1.length);

console.log(substr);
const flag = true;

if(flag){
    console.log("Flag is true");
}else{
    console.log("Flag is false");
}


if(!flag){
    console.log("Flag is true");
}

else{

    console.log("Flag is false");
}

let i=0;

while(i<=10){
    console.log(i);
    i++;
}

console.log("*********************************");

//Finding common multiples of 3 and 5 between 1 and 100

let n=0;
for(let i=1;i<=100;i++){

    
    if(i%3==0 && i%5==0){
        n++
        console.log(i);
        console.log(n);
        if(n==3){
        break;}
    }

}


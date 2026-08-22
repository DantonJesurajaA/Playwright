var marks = [1,2,3,4,5];

console.log(marks[0]); //To print the first element of the array

var len=marks.length; //To find the size of the array

console.log(len); //To print the size of the array

//Reassigning values in array

marks[3]=10;

console.log(marks[3]); //To print the 4th element of the array

console.log(marks); //To print the whole array

var marks1 = marks.slice(1, 4); //To create a new array with elements from index 1 to 3

console.log(marks1); //To print the new array

//Adding a value at the end of the array

marks.push(6);

console.log(marks); //To print the whole array after adding a value at the end


marks.pop(); //To remove the last element of the array

console.log(marks); //To print the whole array after removing the last element


marks.unshift(0); //To add a value at the beginning of the array

console.log(marks); //To print the whole array after adding a value at the beginning

marks[4]=4; //To reassign a value at index 4

console.log(marks); //To print the whole array after reassigning a value at index 4

//Get index of a value in the array

var index = marks.indexOf(4);

console.log(index); //To print the index of the value 4 in the array

//Check if an element is present in the array

var isPresent = marks.includes(10);

console.log(isPresent); //To print true if the value 10 is present in the array, else false

//Print each element of the array using for loop

for(var i=0;i<marks.length;i++){
    console.log(marks[i]); //To print each element of the array
}

let sum=0;

//Print the sum of all elements of the array using for loop
for(var i=0;i<marks.length;i++){
    sum += marks[i];
}
console.log(sum); //To print the sum of all elements of the array


console.log("Checking for auto suggestion");


console.log(marks.reduce((sum,marks)=>sum+marks,0));


//Find and pick the even numbers from an array and create a new array

console.log("******************************************")

var scores = [10,21,32,44,51,23];

var scores1=[];

for(let m=0;m<scores.length;m++){

    if(scores[m]%2==0){

        scores1.push(scores[m]);
    }
}

console.log(scores1)


//Performing the same using filter

let newFilterScore = scores.filter(score=>score%2==0);

console.log("Using filter function")

console.log(newFilterScore);

//Using map function

let newMappedArray = newFilterScore.map(score=>score*3);

console.log(newMappedArray);

//Sorting of numbers

let values=[12,3,19,16,14];

console.log(values.sort((a,b)=>a-b)); // Recursive bubble sort

console.log(values.sort((a,b)=>b-a)); // Descending order
//Create an object

let person={

    firstname:"Danton",
    lastname:"Jesuraja",
    age:29,
    fullname: function(){ console.log(this.firstname+this.lastname) }


}

console.log(person.firstname);

console.log(person['firstname']);

person.firstname = 'Maria Nevis Danton';

console.log(person.firstname);

person.gender = 'male';

console.log(person['gender']);

delete person.gender;

console.log(person);

console.log(person.fullname());


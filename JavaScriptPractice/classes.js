class Person{

    constructor(firstname,lastname){

        this.firstname=firstname;
        this.lastname=lastname;
    }

    get fullname(){

        console.log(this.firstname + " " + this.lastname);
    }
}

let person1 = new Person("Florance","Selvabai");

person1.fullname;


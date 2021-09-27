// Question 1
// creating object literal 
// const person ={
//     name: 'zakarie',
//     age: 18
// };

// creating object using new keyword
// const person2 =new Object();
// person2.name = 'zaki'
// person2.age = 18;
// delete person2.name;
// Object.values(person);

//Question 2 
// object constructor 
// function Person(firstName, lastName,yearBorn){
//     this.fName = firstName;
//     this.lName=lastName;
//     this.yBorn=yearBorn;
//     this.age=function(){
//         return "2021" +" "+this.yBorn;
//     }
// }
// const person1=new Person("zaki","ahmed",1999);
// const result=person1.age();
// console.log(result);

// Question 3
// function expression

// const sum=function(num1,num2){
//     return num1+num2;
// }
// const result=sum(15,20);
// console.log(result);

// Question 4
// self invoke funtion
// (function(){
//     const name="zaki ahmed";
//     console.log(name);

// })();

// Question 5
// Arrow functions
// const ArrowFunc=(a,b)=>{
//     return a+b;
// }
// const result= ArrowFunc(90,45);
// console.log(result);

//Question 6
// Default parameters 
// const DefaultFunc=(a,b=10)=>{
//     return a+b;
// }
// const result= DefaultFunc(30);
// console.log(result);

// Question 7
//Create a class
class Vehicle{
    constructor(type, year){
        this.type=type;
        this.year=year;
    }
    move(){
        console.log("Moving a car");
    }
    stop(){
        console.log("Stopping a car");
    }
}
// const car1=new Vehicle("surf",2006);
// car1.move();
// car1.stop();


// Question 8
class plane extends Vehicle {
    constructor(type,year){
        super(type,year);
        this.type = type;
        this.year = year;
    }
    fly(){
        console.log("Flying");
    }
    land(){
        console.log("Landing");
    }

}
// const car=new plane("surf",2006);

// car.fly();
// car.land();


// Question 9
// const car=new plane("surf",2006);
// car.move();
// car.stop();
// car.fly();
// car.land();

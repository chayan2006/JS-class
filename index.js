// Basic of JavaScript
console.log("Hello World")
console.log(`I like Mb Protin`)

//window.alert("this is an aleart")
//window.alert("welcome to my world")
/* 
this is my wolrd and i am the ruler of this world
*/
console.log("this is the end of my world")
document.getElementById("myH1").textContent = "Welcome to my world ";
document.getElementById("myP").textContent = "I am the Master of my world ";
// variable = A container that stores a value
//            Behave as if it were the value it contains
// 1 , decalaration let x ;
// 2 . assigment x = 100;
let age = 25 ;
let price  = 10.99;
let gpa = 5.5 ;
let firstName = "Chayan"
let PasandidaAurat = 'Mio'

console.log(`you are ${age} years old`);
console.log(`the price is ${price}`);
console.log(`your gpa is ${gpa}`);
console.log(typeof firstName);
console.log(`your name is ${firstName}`)
console.log(`your pasandida aurat is ${PasandidaAurat}`);

// constant = container whose value cannot be changed
const pi = 3.14 ;
console.log(`the value of pi is ${pi}`);
// pi = 4.5 ; // error
// console.log(`the value of pi is ${pi}`);
// basic of string
let string1 = "hello";
let string2 = 'world';
let fullString = string1 + " " + string2 ;
console.log(fullString);
let fullString2 = `${string1} ${string2}` ;
console.log(fullString2);
// string properties and methods
let myString = "hello world";
console.log(`the length of my string is ${myString.length}`);
console.log(`the uppercase of my string is ${myString.toUpperCase()}`);
console.log(`the lowercase of my string is ${myString.toLowerCase()}`);
console.log(`the index of word 'world' in my string is ${myString.indexOf('world')}`);
console.log(`the slice of my string from index 0 to 5 is ${myString.slice(0,5)}`);
let a = 10 ;
let b = 20 ;
const name = "Chayan";
console.log("Addition:"+ (a+b));
console.log("Substration:"+ (a-b));
console.log("Multiplication:"+(a*b))
console.log("Division: "+ (a/b));
console.log("Remainder:"+(a%b));
console.log("Name: "+name);
function ShowMessege(){
    prompt("`Hello! I am the master of this world,what is your name:")
}

// if...else Statement 
// Used to execute a block of code if a condition is true, otherwise another block if it's false.
/*
Syntax:
 if (codition){
 code runs if condition is true
 } else{
    code runs if condition is false
    }
*/
var marks = 75;
var marks = 8;

if(marks>= 50){
    console.log("You are passed for this exam , best of luck for the next exam ")

}else{
    console.log("you are failed for this exam,Such a fucking shit you are ")

}

// if.....else if.....else (Multiple Conditions)
let score = 90
if (score >=90){
    console.log("you are passed and you are a good student in this class")
}else if (score >= 75){
    console.log("it's a Good number but not that mush to enjoy rest of your life")
}else if (score>=60){
    console.log("you are passed but your number is  like below average student not expected form you ")
}else{
    console.log("failed funcking bicth")
}
//Swithch Statement
//Used to select one block of code to execute from multiple option.
/*
switch(expression){
case(value1) : 
  code to execute
  break;
case(vlaue2)  :
  code tp executed
  breal;

case (value3):
    code to executed

}
switch (expression){

}
*/
let day =   3
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2 : 
       console.log("Tuesday");
       break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Staturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
}
/*
Break Statement 
the break statement exit a loop or switch statement immendiately.
Exame(in loop):
for (let i = 1 ; <=5; i++){
if(i===3){
break;// stop loop whwn i = 3 }
}
console.log(i);
}
*/

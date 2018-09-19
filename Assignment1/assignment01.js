/********************************************************************************* 
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Pilicy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: ____Margarita Selenko____ Student ID: _147393169__ Date: _2/4/18_
*
********************************************************************************/

/****************************** Task 1 *****************************/ 

var name = "Margarita Selenko";
var number = 5;
var program = "CPD";
var answer = false ;
if (Boolean(answer))
  var job= "have";
  else
    job="don't have";
console.log ("My name is "+ name + " and I'm in "+ program + " program." + 
             " \nI'm taking "+ number + " course in this semester and I "+ job + " a part-time job now.");

/****************************** Task 2 *****************************/ 

var year = new Date();
year = year.getFullYear();
var age= prompt("Please enter your age:");
var x = year-age;
console.log ("You were born in the year of "+ x);
var study = prompt("Enter the number of years you expect to study in the college:");
var y = year + +study;
var y = console.log("You will graduate from Seneca college in the year of " +y);

/****************************** Task 3 *****************************/ 

var celsius = prompt("Enter Celsius");
var fahren = prompt("Enter Fahrenheit");
var x = (celsius * 9)/5 + 32;
console.log(celsius + "°C is " + x  + "°F.");
var y = (fahren - 32) * 5/9;
console.log(fahren + "°F is " + y + "°C");

/****************************** Task 4 *****************************/ 

var i;
for (i = 0; i <= 10; i++){
  var x = i % 2;
if (x != 0)
  console.log (i + " is odd");
  else
    console.log(i + " is even");
}

/****************************** Task 5 *****************************/ 

function largerNum(num1,num2){
  var large = 0;
  if (num1 > num2)
   large=num1;
  else
    large= num2;
  return large;
}
 
var greaterNum = function(a,b){ 
  return a > b ? a : b;
};

var first=prompt("Enter the first number: "); var second= prompt("Enter the second number: ");
var lg = largerNum(first,second);
console.log("The larger number of " + first + " and "+ second + " is " + lg);
var first=prompt("Enter the first number: "); var second= prompt("Enter the second number: ");
var gr = greaterNum( first, second);console.log("The larger number of " + first + " and "+ second + " is " + gr);

/****************************** Task 6 *****************************/ 

function Evaluator (){
  var num = 0;
 for (var a = [], i = arguments.length; i--;) {
        num +=arguments[i];
}
var average = num/arguments.length;

  return (average > 50) ? true : false;
}

console.log("Average grater than or equal to 50: " + Evaluator(30, 70, 50));
console.log("Average grater than or equal to 50: " + Evaluator(60, 90, 70));
console.log("Average grater than or equal to 50: " + Evaluator(50, 70, 60));

/****************************** Task 7 *****************************/
  var Grader = function(mark){
  var grade;
  if(mark >= 80)
    grade='A';
  else if(mark >= 70)
    grade = 'B';
  else if(mark >= 60)
    grade = 'C';
   else if(mark >= 50)
     grade = 'D';
   else
      grade ='F';
    return grade;
}

function call(){
var scope = prompt("Enter your grade scope");
console.log("Your mark is " +  Grader(scope));
  }
call();
call();
call();

/****************************** Task 8 *****************************/

function showMultiples(num,numMultiples){
  for (var i = 1; i <= numMultiples; i++){
    c=num * i;
    console.log(num + ' x ' + i + ' = ' + c);
  }
}


showMultiples(5 ,4);
showMultiples(2 , 6);
showMultiples(1 ,3);

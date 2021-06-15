
/*
Math
Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.

Round
Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.

Floor
Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
        
Max
Create a function that finds and prints out the biggest element in the passed array of numbers.
    
Date
    
Print out the whole date object in the console.
Print out the current time in the console.
Print out the current date in the console.
*/

"use strict";

function randomNum(x, y) {

    return Math.floor(Math.random() * (y - x)) + x;
    
    }
  console.log(randomNum(1,50));// random number between 1 and 50.


function randomNumbers(){
    var array = [];
    while(array.length < 10){
        var number = Math.floor(Math.random() * 50) + 1;
        array.push(number);

    }
    return array;
}
console.log(randomNumbers()); // 10 random numbers between 1 and 50.



var rounded = Math.round(0.2345 * 100) / 100;
console.log(rounded);// rounds number to two decimals

function roundNumbers(array){
   // var array = [10.2345, 1.67464, 3.78453];
    var rounds = array.map(function (number){
      return Math.round(number * 100) / 100; // two decimals
     //return Math.round(number);...nearest integer
   
  
    });
    return rounds;
}
console.log(roundNumbers([10.2345, 1.67464, 3.78453]));



function largestNumber(array){
    var max = array.reduce(function (biggest, element){
        return Math.max(biggest, element);
        
    });
    return max;
}
console.log(largestNumber([22, -1, 13, 45, 12, 18]));



console.log(new Date());


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(date); //current date

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time); // current time












  

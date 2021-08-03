"use strict";

var soccerField = document.querySelector("body");
var player = document.getElementById("play");

function move(event){
    var x = event.clientX;
    var y = event.clientY;

    player.style.top = y - 50;
    player.style.left = x - 50;
    
};
soccerField.addEventListener("click", move);

function stop(){
 soccerField.removeEventListener("click", move);   
    
}


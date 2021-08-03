"use strict";
const btn = document.querySelector("#btn");
btn.addEventListener("click",function (){

    const chuckUrl = "https://api.chucknorris.io/jokes/random";

    fetch(chuckUrl).then(function (response){
        console.log(response);
        return response.json();
        
        
    }).then(function (data){
       console.log(data);
    
  const paragraph = document.createElement("p");
 const node =  document.body.appendChild(paragraph);
 node.append(data.value);
 console.log(node);
 
 
 

 
        
    })

    
});
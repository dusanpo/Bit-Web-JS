
function AllLiElements(){
    var list = document.querySelectorAll("li");
   // console.log(list);

    for(var i = 0; i < list.length; i++){  
    if(i < 6){
        list[i].setAttribute("class", "first");
         //list[i].className = "first";
    }   
    }
       
};
document.getElementById("btn").addEventListener("click", AllLiElements);


function secondlist(){
    var ul = document.querySelectorAll("body ul")[1];
    //var li = ul[ul.length - 1];
    // var li = ul[1];
   console.log(ul);
   var li = ul.children;
   for(var i = 0; i < li.length; i++){
   li[i].setAttribute("class", "second");
    
   }  
    
};
document.getElementById("btn1").addEventListener("click", secondlist);


function thirdList(){   
var newList = document.createElement("ul");
newList.innerHTML = "<li>seven</li> <li>eight</li> <li>nine</li>";
document.body.appendChild(newList);
console.log(newList);
var newLi = newList.children;
for(var i = 0; i < newLi.length; i++){
    newLi[i].setAttribute("class", "third");
}
};
document.getElementById("btn2").addEventListener("click", thirdList,{ once:true });

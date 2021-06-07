
function webUrlInformation(){
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(location.search);
   
}
webUrlInformation();

function storageTest(){
    localStorage.setItem("name", "Dusan");
    var name = localStorage.getItem("name");
    console.log(name);
    //removeFromLocalStorage("name");
    sessionStorage.setItem("name1", name);
    var name1 = sessionStorage.getItem("name1");
    console.log(name1);
    //removeFromSessionStorage("name1");
}
storageTest();

 function removeFromLocalStorage(key){
  var remove = localStorage.removeItem(key);
  console.log("Removed: " + remove);
     
 }
 function removeFromSessionStorage(key){
     sessionStorage.removeItem(key);
     
 }

 function clearAll(){
     localStorage.clear();
     sessionStorage.clear();
     
 }
 clearAll();

 


 function goBack() {
    window.history.go(-2)
  }

  function goForward() {
    window.history.forward()
  }


 function alertPromptConfirm(){
    alert("Hello world");
    var userInput = prompt("This is question?");
    console.log(userInput);
    var answer = confirm("This is answer");
    console.log(answer);
       
}
alertPromptConfirm();
 










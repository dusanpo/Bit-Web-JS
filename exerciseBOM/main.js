function test1(){
    console.log(location.hostname);
    console.log(navigator.vendor);
    console.log(location.search);
    
    
    
    
}
window.test1();


function something(){
    console.log ("Hello");

}
something();

function printBrowserInfo(){
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
    
    
    
    
}
printBrowserInfo();

function isOnline(){
    if(navigator.onLine){
        console.log('Online');
        
    }else{
        console.log('Offline');
        
    }
    
}
isOnline();


function getScreenDimension(){
    console.log("Available screen dimension:" + screen.availWidth + "x" + screen.availHeight);
    console.log('Screen dimensions: ' + screen.width + "x" + screen.height);

    
    
    
}
getScreenDimension();

function urlData(){
    console.log('full url adress: ' + location.href);
    console.log("host name: " + location.hostname);
    console.log('used protocol: ' + location.protocol);
    console.log('requestParams: ' + location.search);
    
    
    
    
    
}
urlData();

function reloadPage(){
    location.assign(address);
    
}

 function openGoogle(){
    var win = window.open("https://google.com");

    setTimeout(function (){
     win.close();
        
    },4000);
     
 }
 openGoogle();



 

 

 
 



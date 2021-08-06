console.log('Hello npm');

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));



const figlet = require('figlet');

figlet('Hello World!!',{
    font: "sub-zero",
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.log(err);
        return;
    }
    console.log(data)
});
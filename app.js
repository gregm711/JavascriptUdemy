var a = 'Hello world';

function b() {

}

// Objects 

var person  = new Object();

person["firstname"] = "Greg";
person["lastname"]  = "Miller"

person.middleName  = "Carson"
person.address = {};
pseron.address.city = "Cincinatti"
var firstNamePropery ="firstname"

console.log(person);
console.log(person[firstNamePropery]); 
console.log(pseron.firstname);


// Object Literals


var objLiteral = {'firstName': 'Greg', 'lastName': 'Miller'};



//functions as objects


function greet() {
	console.log("hi");
}

greet.language = 'English'

console.log(greet.language);




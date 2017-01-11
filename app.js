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



//function expressions

var anonymousGreet = function() {
	console.log("hi");
}

anonymousGreet();



function log(a) {
	console.log(a);
}

log("Hello")




//By value (primitives)


var a = 3;
var b;

b = a;
a = 2;
console.log(b); -> 3
console.log(a); -> 2


// By reference (objects)

var c = {'greeting': 'hi' };
var d;


d = c;
c.greeting = 'new Greeting';

console.log(d.greeting) -> 'new greeting'



// This

console.log(this);

function a() {
	consoe.log(this);
	this.newVar = 'hello';
}

a();

console.log(newVar);

var c = {
	name: 'name one'
	log: function () {
		this.name = 'new name'  // Sets name prop of C variable
		console.log(this);

		var setname = function(newName) {
			this.name = newName;  // Sets name prop of global variable
		}
		setname("Updated once again");
		console.log(this);
	}
}
c.log();

// Self
var c = {
	name: 'name one'
	log: function () {
		var self  = this;   //set self to this propery of C variable
		self.name = 'new name'  // Sets name prop of C variable
		console.log(this);

		var setname = function(newName) {
			self.name = newName;  // Sets name prop of C variable
		}
		setname("Updated once again");
		console.log(this);
	}
}

//arrays 

var arr = [1,false, 'this']

arr[0]



// function arguments

function greet(firstname, lastname, language) {
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);   //contains the list of arguments passed in
}



greet();
greet("greg");
greet("greg", "dave", "tom");



//Immediately invoked function expression
function greee(name) {
	console.log("hello" + name);

}

greet();

var greetFunc = function(name) {
	console.log("hello" + name);
}

greetFunc("John");

var invokedGreet = function(name) {
	return "hello " + name
}('invoked name');  //THIS IS IIFE




// functions expressions
var firstName = "john"

(function(global , name) {

	global.someVar = "new value"
	console.log("running function expression" + name)
}(window, firstname)); //IIFE


// Closures

function greet(whattosay) {
	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}
greet('hi')('Greg');

//or this way
var hi = greet('hello');
hi('Greg');

function buildFunctions() {
	var arr = [];
	for (var i=0; i < 3; i++) {
		arr.push(
			function(){
				console.log(i);
			}
			)
	}
	return arr
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();




















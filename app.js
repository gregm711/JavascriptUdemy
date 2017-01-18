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
fs[0]();  -> 3
fs[1]();  -> 3
fs[2]();  -> 3


function buildFunction2() {
	var arr = [];
	for (var i=0; i < 3; i++) {
		arr.push(
			(function(j){
				console.log(j)
			}(i))
			)
	}
	return arr
}

var fs = buildFunctions();
fs[0]();  -> 1
fs[1]();  -> 2
fs[2]();  -> 3

function buildFunctions() {
	var arr = [];
	for (var i=0; i < 3; i++) {
		let j = i
		arr.push(
			function(j){
				console.log(j);
			}
			)
	}
	return arr
}

var fs = buildFunctions();
fs[0]();  -> 1
fs[1]();  -> 2
fs[2]();  -> 3


//more examples of closure

function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log("hello" + firstname  + lastname)
		} else{
			console.log("hola " + firstname + lastname)
		}

	}
}

var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es')

greetEnglish('Greg', 'Miller')  //these functions will still have acccess to the language variable used to create the variable
greetSpanish('Name', 'asd')


//Closure and callbacks


function sayHiLater(){
	var greeting = 'Hi'
	setTimeout(function() {
		console.log(greeting);
	}, 3000);
}

sayHiLater();

function tellMeWhenDone(callBack) {
	var a  = 1000;

	callback();
}


tellMeWhenDone(function(){
	console.log("I am done");
})



//bind  creates a copy of the function


var person {
	firstname: 'Greg'

	getFullName: function () {
		return 'asdasd'
	}
}


var logName = function(lang1, lang2) {
	console.log('Logged ' + this.getFullName());
}

var logPersonName = logName.bind(person);

logName();


//call executes the function and can specify the this variable

var person {
	firstname: 'Greg'

	getFullName: function () {
		return 'asdasd'
	}
}


var logName = function(lang1, lang2) {
	console.log('Logged ' + this.getFullName());
}

var logPersonName = logName;

logName.call(person, 'en');



//apply is exactly the same as call but passes arguments as an array

var person {
	firstname: 'Greg'

	getFullName: function () {
		return 'asdasd'
	}
}


var logName = function(lang1, lang2) {
	console.log('Logged ' + this.getFullName());
}

var logPersonName = logName;

logName.apply(person, ['en']);

// function borrowing -> calling functions on other objects using apply

var person2 = {
	firstname: 'Greg',
	lastname: 'Miller'
}

person.getFullName.apply(person2);


//function currying used create a copy of a funciton with some default values

function multiply(a, b) {
	return a*b;
}

var mulitiplyByTwo = multiply.bind(this, 2);


console.log(mulitiplyByTwo(5))  -> 10


// functional programming example

var arr1  =[1,2,3];
var arr2 = [];
for (var i=0; i< arr1.length; i++) {
	arr2.push(arr1[i] * 2)
}

// in functional programming terms

function mapForEach(arr, fn) {
	var newArr = [];
	for (var i=0; i <arr.length; i++) {
		newArr.push(
			fn(arr[i])
			)
	}
}

var arr2 = mapForEach(arr1, function(item) {
	return item * 2
})

var checkPastLimit = mapForEach(function(limiter, item) {
	return item > limiter;
})

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));



// Prototypes

var person = {
	firstname: 'Default',
	lastname: 'default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}
var john = {
	firstname: 'Greg',
	lastname: 'Miller'
}

//  ONLY FOR DEMO PURPOSE - this is not how you would create a prototype

john.__proto__ = person;   // john now inherits from person
console.log(john.getFullName)

var jane = {
	firstname: 'Jane'
}

jane.__proto__  = person;
console.log(jane.getFullName) // Jane Default











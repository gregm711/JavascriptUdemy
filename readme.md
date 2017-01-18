This readme contains all notes from the udemy course javascript: understanding the weird bits

Syntax parsers: Program that reads code and determines if grammer is valid

Lexical environment: Where something sits physically in an environment

Execution Context: A wrapper to help manage the code that is running


Hoisting: Before code is executed, the javascript egine allocates memory to all vairables and functions. Example code and output:

console.log(a)
b();

var a = 'hello world';

function b() {
	console.log('hello world')
}

output:
undefined
hello world

Hoisting sets all initial variable values to undefined



Undefined in Javascript: undefined is the value that is set initially. You can set a variable to undefined but this is NOT best practice

single Threaded synchronous execution:
Only one thing happens at a time

Invocation:
Running a function ->     a();
all invoked functions create new exectution context.

variable environments:

function b() {
	var myVar = 2;
}

function c() {
	var myVar = 3
}

var myVar =1;
c();


All separate execution contexts have different variable environments. All above myVar calls are different and not associated with eachother

Scope chain:
execution contexts have access to outer lexical environments 

function b() {
	console.log(myVar);  // results in 1, looks to outer environment
}

function a() {
	var myVar = 2;
	b();

}

var myVar = 1;
a();

////////////



function a() {

	function b() {
		console.log(myVar);  // results in 2, looks to outer environment
	}
	var myVar = 2;
	b();

}

var myVar = 1;
a();

/////////


Scope: 
Where a variabel is availabe in code

ES6 allows let:
lets are within a block, only accessible in execution context


Asynchronous Callbacks:

Asnychronous callbacks happen only when all sycnchronous exectution contexts finish


Types:
Javascript uses Dynamic typing -> Javascript determines the type of variables on the fly, without needing to be specified.


Primitive Types:
A type of data that represents a single value, anything that isn't an object

undefined
Null
Boolean
Floating point Number
String
Symbol   ES6 only


infix notation:
function sits in the middle of the paramerters eg: 3 + 4


Operator Precedence and Associativity:
what order is invoked first eg: multiplication over addition
Associativity determines order when operators have the same precedence


Coercion:
converting a value from one type to another

comparison operators:
3 < 2 < 1  becomes false < 1  becomes 0 < 1   so this is true

equality ==  attempts to coerce values if neccesary
strict inequality ===  Does not try to coerce values! Extremely useful


Existence:
if (a) {
	// will run if a is defined and can be coerced to a true boolean
}


Default Values:
function greet(name) {
	name = name || '<defualt value>'
	console.log("Hello " + name);
}

greet();



Objects and functions:
Objects can have primitives, objects or methods(functions) included in them

Object Literals:
Objects literals can be created just by setting var objLit = {};


JSON library;
var objectLiteral = {
	firstname: 'Greg',
	lastname: 'miller'
}

JSON.stringify(objectLiteral)  -> '{"firstname": "Greg", "lastName": "miller"'}'

var jsonValue = JSON.parse('{"firstname": "Greg", "lastName": "miller"'})


First class functions:
Everything you can do with other types you can do with functions

functions can be unnamed and anonymous



Passing by value and by reference:
primitive values are passed by value (a new copy is created)
Objects are passed by reference
equals operator sets up new memory space if used to create new value



this:
calls global this 


arrays:
can hold mulitple types, index at 0. duh

Arguments:
The paramets you pass to a function. in javascript you don't need to pass in all arguments

Automatic semicolon insertion:
in javascript semicolons are optional, so the syntax parser will add semicolons where it beleives they are missing. Just add your own semicolons to avoid this nasty issue

Imediately invoked function expressions (IIFE):
functions that are immediately run 

Closures:
Javascript gives access to memory of variables that have previously finished execution stacks.

Callbacks:
function that is given to another function to be run when the other function is finished


call apply and bind:
see app.js



functional Programming:

see app and underscore.js


Object-Oriented & prototypal inheritence:

Inheritance:
One Object gets acces to the properties and methods of another object


Prototypal Inheritance:

objects have prototypes that allow it to access properties that are not directly part of the objects, but are on the object prototype
Javascript engine will do the work looking up the prototype chain to find where the property exists.






































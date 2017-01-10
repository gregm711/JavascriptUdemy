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








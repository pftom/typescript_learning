// with a convenient enumeration type thrown in to help things along.
var isDone = false;
// As in JavaScript, all numbers in TypeScript are floating point values.
// In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
var fullName = "Bob Bobbington";
var sentence = "Hello, my name is " + fullName;
console.log('sentence', sentence);
// Array types can be written in one of two ways
var list = [1, 2, 3];
// generic array type
var list_second = [1, 2, 3];
// Tuple
var x;
x = ['hello', 10];
x[0].substr;
// When accessing an element outside the set of known indices,
// a union type is used instead:
x[3] = 'world';
// an enum is a way of giving more friendly names to sets of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(Color[2]);

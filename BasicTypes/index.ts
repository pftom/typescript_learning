// with a convenient enumeration type thrown in to help things along.
let isDone: boolean = false;

// As in JavaScript, all numbers in TypeScript are floating point values.
// In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;
console.log('sentence', sentence);

// Array types can be written in one of two ways
let list: number[] = [1, 2, 3];
// generic array type
let list_second: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10];
x[0].substr;

// When accessing an element outside the set of known indices,
// a union type is used instead:
x[3] = 'world';

// an enum is a way of giving more friendly names to sets of numeric values
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;

console.log(Color[2]);

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;

// The any type is also handy if you know some part of the type,
// but perhaps not all of it.
let list_any: any[] = [1, true, 'free'];
list_any[1] = 100;
list_any[2] = '222';

// void
function warnUser(): void {
  alert('This is my warning message');
}

// Declaring variables of type void is not useful 
// because you can only assign undefined or null to them:
let unusable: void = undefined;
unusable = null;

// undefined & null type are subtypes of all other types
let u: undefined = null;
let n: null = undefined;
let d: number = null;

// The never type is a subtype of, and assignable to, every type;
// no type is a subtype of, or assignable to, never (except never itself).
// Even any isn’t assignable to never.
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {

  }
}

// Type assertions
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
// (someValue as string).length - JSX - as is only allowed
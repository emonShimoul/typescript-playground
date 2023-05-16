let a: number;
let b: string | number;

// array
let c: (string | number)[] = [];

// object
let d: {
  name: string;
  age: number;
  adult: boolean;
};

// any
let e: any[] = [];

// function
// let myFunc: Function;
const myFunc = (a: string, b: string, c: string = "Hii"): string => {
  console.log(c);
  console.log(`Hello ${a} ${b}`);
  return a + b;
};

myFunc("A", "B", "C");

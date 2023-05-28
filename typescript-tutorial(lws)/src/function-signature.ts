// function signature
let caculation: (x: number, y: number, z: string) => number;

caculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(caculation(5, 6, "minus"));

// function signature
let userDetails1: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetails1 = (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => {};

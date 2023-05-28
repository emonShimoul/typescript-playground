// let myFunc1: Function;
const myFunc1 = (a: string, b: string, c: string = "Hii"): string => {
  console.log(c);
  console.log(`Hello ${a} ${b}`);
  return a + b;
};

myFunc("A", "B", "C");

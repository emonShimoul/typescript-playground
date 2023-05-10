// import something from './module';
// import add2 from "./utils/add";
// import multiply from "./utils/multiply";
// import average from "./utils/average";
import methods from './utils/index'

const add1 = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res1 = methods.add2(4, 6);
const res2 = methods.substract(4, 6);
const res3 = methods.multiply(4, 6);
const res4 = methods.average(4, 6);
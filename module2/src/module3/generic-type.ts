// const rollNumbers1: number[] = [44, 12, 4];
// const rollNumbers1: Array<number> = [44, 12, 4];

// const rollNumbers2: string[] = ["44", "12", "4"];
// const rollNumbers2: Array<string> = ["44", "12", "4"];

// const rollNumbers3: Array<boolean> = [true, false];

// const nameAndRollNumbers: Array<{ name: string, roll: number }> = [{ name: "Mr. X", roll: 1 }, { name: 'Mr. Y', roll: 2 }];


// generic type
type GenericArray<T> = Array<T>;
const rollNumbers1: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = {
    name: string, roll: number
}
const nameAndRollNumbers: GenericArray<NameRollType> = [
    { name: "Mr. X", roll: 1 },
    { name: 'Mr. Y', roll: 2 }
];

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Emon", "Wanda"];

// type RelationWithSalaryType = { name: string, salary: number };
interface RelationWithSalaryInterface {
    name: string,
    salary: number
};

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{ name: "Emon", salary: 10000000 }, "Wanda"];

const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [{ name: "Shimul", salary: 10000000 }, "Scarlet"];


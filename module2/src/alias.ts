// type alias in object
type frType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const fr1: frType = {
    name: 'Iron Man',
    age: 30,
    profession: 'Actor',
    address: "USA"
};
const fr2: frType = {
    name: 'Wanda',
    profession: 'Actor',
    address: "Mexico"
};

// type alias in primitive type
type frMarriedType = boolean;

const isPresent: frMarriedType = false;

type courseNameType = string;

const courseName: courseNameType = 'Next Level Web Development';

// type alias in function
type operationType = (x: number, y: number) => number;

const calculate = (
    n1: number, // 10
    n2: number, // 20
    operation: operationType //  (x, y) => x + y ---> (10, 20)= >10 + 20
) => {
    return operation(n1, n2);
}

calculate(10, 20, (x, y) => x + y);
calculate(50, 20, (x, y) => x - y);
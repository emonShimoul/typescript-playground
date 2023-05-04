type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name' | 'age' | 'address'; // manually created
type newTypeUsingKeyOf = keyof PersonType;  // same output as previous line using 'key of'

// const a: newType = 'age';
// const b: newTypeUsingKeyOf = 'address';

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}

const property = getProperty({ name: 'Mr. X', age: 30 }, 'name')
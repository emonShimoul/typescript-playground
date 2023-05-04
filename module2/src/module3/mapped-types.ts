const arrayOfNumbers = [1, 2, 3];      // ['1','2','3']

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())

console.log(arrayOfStrings);

const obj = {
    name: 'Emon'
}
obj['name']

type Volume = {
    height: number;
    width: string;
    depth: number;
};

// mapped type
type Area<T> = {
    // [key in keyof Volume]: Volume[key];
    readonly [key in keyof T]: T[key]
};

const area1: Area<{ height: number, width: string }> = { height: 10, width: '10' }

type AreaString = {
    height: string;
    width: string;
};

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12,
};


type A = AreaString['height'];   // look up types

type B = keyof AreaString;    // 'width' | 'height'




interface Person {

    firstName: number;

    lastName: string;

}



function fullNamee<T extends Person>(person: T): string {

    return `${person.firstName} ${person.lastName}`;

}
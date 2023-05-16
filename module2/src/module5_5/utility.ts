// Pick

interface Personn {
    name: string;
    email?: string;
    contactNo: string;
}

type Contact = Pick<Personn, "contactNo" | "email">;

// Omit
type Name = Omit<Personn, "contactNo" | "email">;


// To make all the properties be optional type
// Partial 
type Optional = Partial<Person>;

// To make all the properties be require type
// Required
type RequiredProps = Required<Person>;

// Readonly type (cannot be change)
const person11: Readonly<Personn> = {
    name: "Persian",
    email: "abc@gmail.com",
    contactNo: '122222',
}

// type
// type myObj = {
//     a: string,
//     b: string,
//     c: string
// }

// usng index signature
// type myObj = {
//     [key: string]: string
// }

// Record
type myObj = Record<'a' | 'b' | 'c' | 'd', string>
const objj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "12"
}


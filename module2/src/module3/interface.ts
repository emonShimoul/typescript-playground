/*

// type alias
type User = {
    name: string;
    age: number;
};

// interface: It is only used for object/reference type (Object, Function, Array). Primitive type cannot be customized using interface.
interface IUser {
    name: string;
    age: number;
};

// extends the interface
interface IExtendedUser extends IUser {
    role: string;
};

// extends using type alias
type ExtendedUser = User & {
    role: string
};

const users: IExtendedUser = {
    name: 'Omanush',
    age: 2000,
    role: 'Unknown'
};

// type alias with function
type addNumberType = (num1: number, num2: number) => number;
// interface with function
interface IAddNumbers {
    (num1: number, nume: number): number
}
const addNumbers: IAddNumbers = (num1, num2) => num1 + num2

// type alias with array
type rollNumbersType = number[];
// interface with array
interface IRollNumbers {
    [index: number]: number
}
const rollnumbers: IRollNumbers = [1, 4, 5]; // [index]

// NOTE: It is better use type alias with function and array. Interface should should be used only with object and class.

*/
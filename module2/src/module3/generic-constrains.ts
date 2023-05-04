
// type MandatoryTypes = { name: string, age: number, salary: number }
interface MandatoryInterface {
    name: string;
    age: number;
    salary: number;
}
// generic constraints
const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = 'Scarlet Witch';
    const newData = { ...myInfo, crush };
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number,
    other1: boolean,
    other2: null
}

const myInfo1: myInfoType = {
    name: 'Emon',
    age: 30,
    salary: 10000000,
    other1: false,
    other2: null
}
const result7 = addMeInMyCrushMind(myInfo1);
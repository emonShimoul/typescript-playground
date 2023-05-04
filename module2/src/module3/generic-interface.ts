// Generic Interface
interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    address?: U;
}

const crush1: CrushInterface<boolean, string> = { name: 'Wanda', husband: false, address: "USA" };

const crush2: CrushInterface<string> = { name: 'Wanda', husband: "SomeOne" };

interface HusbandInterface { name: string, salary: number }
const crush3: CrushInterface<HusbandInterface> = { name: 'Wanda', husband: { name: "SomeOne", salary: 100000 } };

interface PersonInterface {
    name: string;
    salary: number;
}
const crush4: CrushInterface<PersonInterface, { country: string, city: string }> = {
    name: 'Kate',
    husband: { name: 'Persian', salary: 100000 },
    address: { country: "Sweden", city: "Something" }
}
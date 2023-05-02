let emni: any;
emni = "Next level web development";

(emni as string).length;   // type assertion
<string>emni.length;   // type assertion (different way of using)

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param)
        return `The converted result is ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;  // type assertion
const resultToBeString = kgToGram('1000') as string;  // type assertion

type CustomErrorType = {
    message: string
}
try {

} catch (error) {
    console.log((error as CustomErrorType).message);

}
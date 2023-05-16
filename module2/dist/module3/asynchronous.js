"use strict";
/**********************

// JSON Placeholder
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
};

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodoData();

// string type promise
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched';
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data!!');
        }
    });
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;

}

// boolean type promise
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data!!');
        }
    });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;

}

// object type promise
interface DataInterface {
    data: string
}
const makePromiseObject = (): Promise<DataInterface> => {
    return new Promise<DataInterface>((resolve, reject) => {
        const data: DataInterface = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data!!');
        }
    });
};

const getPromiseDataObject = async (): Promise<DataInterface> => {
    const data = await makePromiseObject();
    return data;

}


***************************/ 

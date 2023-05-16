"use strict";
/*******************************************

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.address = address;
        this.age = age;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student('Mr. X', 30, 'BD');
student1.makeSleep(6);

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses(classNumber: number): string {
        return `This ${this.name} will take ${classNumber} class.`;
    }
}

const teacher1 = new Teacher('Mr. Y', 57, 'USA', 'Professior');
teacher1.takeClasses(3);

*******************************************/ 

"use strict";
// using interface
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('I am Starting');
    }
    stopEngine() {
        console.log('I am Stopping');
    }
    move() {
        console.log('I am Moving');
    }
    test() {
        console.log('I am for Testing Purpose');
    }
}
const vehicle1 = new Car('Car', 'Toyota', 2000);
// using abstract class
class Vehicle1 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('I am for moving');
    }
}
class Car1 extends Vehicle1 {
    startEngine() {
        console.log('I am Starting');
    }
    stopEngine() {
        console.log('I am Stopping');
    }
}

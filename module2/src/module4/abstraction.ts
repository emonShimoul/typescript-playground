// using interface


interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
}

class Car implements Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEngine(): void {
        console.log('I am Starting');
    }
    stopEngine(): void {
        console.log('I am Stopping');
    }
    move(): void {
        console.log('I am Moving');
    }
    test() {
        console.log('I am for Testing Purpose');
    }
}


const vehicle1 = new Car('Car', 'Toyota', 2000);


// using abstract class

abstract class Vehicle1 {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log('I am for moving');
    }
}

class Car1 extends Vehicle1 {
    startEngine(): void {
        console.log('I am Starting');
    }
    stopEngine(): void {
        console.log('I am Stopping');
    }
}



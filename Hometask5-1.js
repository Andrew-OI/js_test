// 1. Replicate code from slide 8, create instances of car and truck. Try to call different methods for both, investigate output and explain why.
// 2. Add static method to one class, try to call it and investigate output.
// 3. Call method of father’s class.
// 4. Override method of father’s class.

class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed
    }

    displayInfo() {
        console.log(`Name: ${this.model};
            Year: ${this.year};
            Max Speed: ${this.maxSpeed};
            Type: ${this.type}`
        );

    }


}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting to transport people`);
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        super.displayInfo();
        console.log(`I am starting to transport heavy container`);
    }
}

// let volvo = new Truck2("XC60", 2015, 225);
// volvo.displayInfo();
// volvo.transportContainer();



// 5. Move classes to separate files and import them into the app using require.

module.exports = Vehicle;

// public: This method can be called any where, any time.
// private: This method can only be called inside the class, not in instance
// protected: This method can be called by other methods in this class, or by other methods in child classes

class Vehicle {
    color: string;
    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {

    wheels: number;
    constructor(wheels: number, color: string) {
        super(color)
        this.wheels = wheels;
    }
    private drive(): void {
        console.log('car chuaga')
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}



const vehicle = new Vehicle('blue');


const car = new Car(2, 'black')
// car.startDrivingProcess();




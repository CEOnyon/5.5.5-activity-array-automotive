const { Vehicle } = require("./vehicle");

//import Vehicle  from "./vehicle";

//let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.fuel < 0) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
  
    start() {
        if (this.fuel > 0) {
            console.log("the engine has started.");
            return this.started = true;
        } else {
            console.log("no fuel.");
            return this.fuel = false;
        }
    }


    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make +  " does not have enough space to take all the passengers."); 
            }
        } else {
            console.log(this.model + " " + this.make + "is full");
        }
    }
} 

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000);

myCar.start();
myCar.loadPassenger();
myCar.stop();
myCar.checkService();

console.log(myCar);
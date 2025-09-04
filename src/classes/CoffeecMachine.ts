
abstract class CoffeeMachine{
    abstract brew(): void;

    prepareCoffee(): void {
        this.heatWater();
        this.brew();
    }

    private heatWater(): void {
        console.log("Aquecendo água");
    }
}

class EspressoMachine extends CoffeeMachine {
     brew(): void {
        console.log("Extraindo espresso");
    }
}

const espresso = new EspressoMachine();
espresso.prepareCoffee();

// · · · · ·
type CoffeeCup = {
    shots: number;
    // · · · · ·
    sugar?: boolean;
    // · · · · ·
    water?: boolean;
    Milk?: boolean;
}
interface CoffeeEarlyStage  {
    coffee(shots: number): CoffeeCup;
}
// · · · · ·
abstract class CoffeeInitial implements CoffeeEarlyStage  {
    // · · · · ·
    private static BEANS_GRAM: number = 10;
    private storageBeans: number = 0;
    // · · · · ·
    constructor(storageBeans: number) {
        if(storageBeans < 0) {
            throw new Error ('The value entered is invalid');
        } else if (storageBeans == 0) {
            throw new Error ('The entered value must be greater than 0');
        }
        this.storageBeans += storageBeans;
        console.log('< - - - - - - - - - - - - - - - - - - - - >');
        console.log(`I put in ${storageBeans} coffee beans`);
        console.log('< - - - - - - - - - - - - - - - - - - - - >');
    }
    // · · · · ·
    protected Extract(shots: number) {
        if(this.storageBeans < shots * CoffeeInitial.BEANS_GRAM){
            throw new Error(`need ${shots * CoffeeInitial.BEANS_GRAM - this.storageBeans} coffee beans to make coffee`);
        }
        this.storageBeans -= shots * CoffeeInitial.BEANS_GRAM;
        console.log('making coffee · · · · ·');
    }
    // · · · · ·
    protected LeftoverBeans(): void {
        console.log(`${this.storageBeans} remaining coffee beans`);
    }
    protected HotCoffee(): void {
        console.log('boiling · · · · ·');
    }
    protected CoolCoffee(): void {
        console.log('Cooling · · · · ·');
    }
    protected AddMilk(): void {
        console.log('add Milk · · · · ·');
    }
    protected AddWater(): void {
        console.log('add Water · · · · ·');
    }
    // · · · · ·
    protected abstract Bundle(shots: number): CoffeeCup;
    // · · · · ·
    coffee(shots: number): CoffeeCup {
        this.LeftoverBeans();
        this.AddWater();
        this.AddMilk();
        this.HotCoffee();
        this.CoolCoffee();
        this.Extract(shots);
        return this.Bundle(shots);
    }
}
// · · · · ·
class Espresso extends CoffeeInitial {
    // · · · · ·
    constructor(beans: number) {
        super(beans);
    }
    coffee(shots: number): CoffeeCup {
        console.log('Please use Bundle');
        return {
            shots
        }
    } 
    // · · · · ·
    Bundle(shots: number): CoffeeCup {
        super.Extract(shots);
        super.LeftoverBeans();
        super.HotCoffee();
        console.log(`${shots} cups of coffee are done !`);
        return {
            shots
        }
    }
}
// · · · · ·
class CoffeeLatte extends CoffeeInitial {
    constructor(beans: number) {
        super(beans);
    }
    coffee(shots: number): CoffeeCup {
        console.log('Please use Bundle');
        return {
            shots
        }
    }
    // · · · · ·
    Bundle(shots: number): CoffeeCup {
        super.Extract(shots);
        super.LeftoverBeans();
        super.AddMilk();
        console.log(`${shots} cups of coffee are done !`);
        return {
            shots,
            sugar: true,
            water: false,
            Milk: true
        }
    }
}
// · · · · ·
// let ToEspresso = new Espresso(20);
// ToEspresso.Bundle(1);
let ToCoffeeLatte = new CoffeeLatte(30);
ToCoffeeLatte.Bundle(2);
type AP = {
    shots: number;
}

interface Rules {
    extract(shots: number): AP;
}

abstract class Early implements Rules {
    private beansGram: number = 15;
    private beansStorage: number = 0;

    private waterTank: number = 0;
    private waterStorage: number = 0;
    private waterExtract: number = 0.5;

    // water setting
    constructor(water: number) {
        if(0 >= water) {
            throw new Error(`물탱크의 크기는 0 보다 커야 합니다.`);
        }
        this.waterTank += water;
    }
    AddWater(water: number): number {
        if(0 > water) {
            throw new Error(`물의 양은 0 보다 커야합니다.`);
        }
        return this.waterStorage += water;
    }

    // beans portafilter - tamping - install
    Portafilter(beans: number) {
        // coffee porta filter
        if(13 >= beans && beans <= 17) {
            throw new Error(`커피를 만들기 위한 커피콩의 그램이 적절하지 않습니다. [ 적정량 = ${this.beansGram}Gram ]`);
        }
        this.beansStorage += beans;
    }
    // setting
    protected hasHot(): void {
        setTimeout(() => {
            console.log(`따뜻하게 데피는 중 · · ·`)
        }, 1000);
    }
    protected Tamping(): void {
        setTimeout(() => {
            console.log(`tamping · · ·`);
        }, 2000);
    }

    // setting
    protected abstract coffee(shots: number): AP;
    extract(shots: number): AP {
        if(this.waterStorage < this.waterExtract) {
            throw new Error(`커피를 추출하기 위한 물이 부족합니다 · · ·`);
        }
        this.waterStorage -= this.waterExtract;
        if(this.beansGram > this.beansStorage) {
            throw new Error(`커피를 추출하기 위한 커피콩이 부족합니다 · · ·`);
        }
        this.beansStorage -= this.beansGram;
        return this.coffee(shots);
    }
}

class CoffeeMaker extends Early {
    protected coffee(shots: number): AP {
        console.log(`커피를 만들기 위해 준비를 하고 있습니다.`);
        super.hasHot();
        super.Tamping();
        setTimeout(() => {
            console.log(`${shots}잔의 커피가 완성 되었습니다.`);
        }, 3000);
        return {
            shots
        }
    }
}

let Test = new CoffeeMaker(10);
// ····· ····· ····· ·····
Test.Portafilter(16);
Test.AddWater(10);

Test.extract(1);
// ····· ····· ····· ·····
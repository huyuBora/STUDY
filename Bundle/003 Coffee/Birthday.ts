// · · · · ·
type AP = {
    shots: number;
    // 
    hot?: boolean;
}

interface BP {
    setting(shots: number): AP;
}

// · · · · ·
abstract class CP implements BP {
    private static BEANS_GRAM: number = 10;
    private storageBeans: number = 0;

    constructor(storageBeans: number) {
        if(storageBeans < 0){throw new Error("ERROR - storageBeans 0");}
        this.storageBeans += storageBeans;
    }

    private Extract(shots: number) {
        if(this.storageBeans < shots * CP.BEANS_GRAM){throw new Error("ERROR - Fall beans");}
        this.storageBeans -= shots * CP.BEANS_GRAM;
        console.log(`커피를 추출하기 위해 콩을 갈고 있습니다. 남은 커피콩의 그램 ${this.storageBeans}`);
    }

    protected hasHot(hot: boolean): void {
        console.log('커피를 따듯하게 데우고 있습니다.')
    }

    protected abstract Bundle(shots: number): AP;

    setting(shots: number): AP {
        this.Extract(shots);
        return this.Bundle(shots);
    }
}

class Espresso extends CP {
    constructor(storageBeans: number) {
        super(storageBeans);
    }

    protected Bundle(shots: number): AP {
        super.hasHot(true);
        return {
            shots,
            hot: true
        }
    }
}

let TEST = new Espresso(11);
TEST.setting(1);
console.log(TEST)
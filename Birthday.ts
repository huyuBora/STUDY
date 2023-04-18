type Contents = {
    shots: number;
}

interface Junior {
    extract(shots: number): Contents;
    portafilter(beans: number): number;
    cleaning(): void;
    stting(): void;
    total(): void;
}

interface Senior {
    extract(shots: number): Contents;
    portafilter(beans: number): number;
    cleaning(): void;
    stting(): void;
    total(): void;
    // Senior
    alterTemperature(temperature: number): number;
    alterCompression(compression: number): number;
    alterBeans(beans: number): number;
    alterWater(water: number): number;
}

class machine implements Junior, Senior {
    private tally: number = 0;
    total(): void {
        this.tally++;
    }

    private SerialNumber: number;
    private SerialName?: number | string;
    constructor(SerialNumber: number, SerialName?: number | string) {
        this.SerialNumber = SerialNumber;
        this.SerialName = SerialName;
    }
    static Coffee(SerialNumber: number, SerialName?: number | string) {
        return new machine(SerialNumber, SerialName);
    }

    private temperature: number = 95;
    alterTemperature(temperature: number): number {
        return this.temperature = temperature;
    }
    private compression: number = 9;
    alterCompression(compression: number): number {
        return this.compression = compression;
    }
    private beansGram: number = 15;
    alterBeans(beansGram: number): number {
        return this.beansGram = beansGram;
    }

    private beans: number = 0;
    portafilter(beans: number): number {
        if(this.beansGram+1 < beans || this.beansGram-1 > beans) {
            throw new Error(`Requires ${this.beansGram} Coffee Beans · · ·`);
        }
        return this.beans += beans;
    }

    private water: number = 30;
    alterWater(water: number): number {
        return this.water = water;
    }

    private To(shots: number): Contents {
        return {
            shots
        }
    }
    extract(shots: number): Contents {
        if(this.beans < shots * this.beansGram) {
            throw new Error(`Not enough coffee beans.`);
        }
        this.beans -= shots * this.beansGram
        this.total();
        return this.To(shots);
    }

    private totalCleaning: number = 0;
    cleaning(): void {
        this.totalCleaning++;
        console.log(`Cleaning is in progress · · · !`);
    }

    stting(): void {
        console.log(`
            · · · · · · · · · · · · · · ·
            Serial Number ${this.SerialNumber} " Serial Name ${this.SerialName} "

            total number ${this.tally}
            number of cleanings ${this.totalCleaning}

            temperature ${this.temperature} ℃
            compression ${this.compression} Bar
            beansGram ${this.beansGram} Gram

            extract water ${this.water} ml

            storage Beans ${this.beans}
            · · · · · · · · · · · · · · ·
        `);
    }
}

let A: Junior = machine.Coffee(1);
A.stting()
type AP = {
    value: string;
    next?: AP;
}

interface BP {
    push(value: string): void;
    pop(): string;
}

class CP implements BP {
    ToNumber: number = 0;
    Look?: AP;
    constructor(private MAX_NUMBER: number){return}
    push(value: string): void {
        if(this.ToNumber > this.MAX_NUMBER){throw new Error("MAX NUMBER");}
        const ToLook: AP = {value, next: this.Look}
        this.Look = ToLook;
        this.ToNumber++;
    }
    pop(): string {
        if(this.Look == null){throw new Error("Look End");}
        const ToLook = this.Look;
        this.Look = ToLook.next;
        this.ToNumber--;
        return ToLook.value;
    }
}

let DP = new CP(10);
DP.push('A 01');
DP.push('B 02');
DP.push('C 03');
console.log(DP);
while(DP.ToNumber !== 0) {
    console.log(DP.pop());
}

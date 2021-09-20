// using Classes
export class Payment {
    // constructors
    constructor(c, d, a) {
        this.recipient = c;
        this.detail = d;
        this.amount = a;
    }
    // methods
    format() {
        return `${this.recipient} is owed 💰${this.amount} for ${this.detail}`;
    }
}

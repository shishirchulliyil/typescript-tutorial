// using Classes
export class Invoice {
    // constructors
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    // methods
    format() {
        return `${this.client} owes 💰${this.amount} for ${this.detail}`;
    }
}

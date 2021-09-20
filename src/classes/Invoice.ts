import { HasFormatter } from "../interfaces/HasFormatter.js";


// using Classes
export class Invoice implements HasFormatter{
    // class variables
    readonly client:string;
    public detail:string;
    private amount:number;

    // constructors
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.detail=d;
        this.amount=a;
    }

    // methods
    format(){
        return `${this.client} owes 💰${this.amount} for ${this.detail}`
    }
}
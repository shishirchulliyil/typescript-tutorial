import { HasFormatter } from "../interfaces/HasFormatter.js";


// using Classes
export class Payment implements HasFormatter{
    // class variables
    readonly recipient:string;
    public detail:string;
    private amount:number;

    // constructors
    constructor(c:string,d:string,a:number){
        this.recipient=c;
        this.detail=d;
        this.amount=a;
    }

    // methods
    format(){
        return `${this.recipient} is owed 💰${this.amount} for ${this.detail}`
    }
}
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul"); // adding exclamation to confirm that this will never be null
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    // below is an example of Tuple which is same as Array but with types fixed for all indexes
    // if we had used a normal Array here it would have given error on line 28 and 31 
    // while using spread operator on Array
    let value = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...value);
    }
    else {
        doc = new Payment(...value);
    }
    // render the list
    list.render(doc, type.value, 'end');
}, false);
// understanding "GENERICS"
// understanding "GENERICS" normal example && using Interfaces
const addUUID = (obj) => {
    let uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uuid });
};
let docOne = addUUID({ name: 'mario', age: 26 });
console.log(docOne);
// console.log(docOne.name); <-- this will give error if Generics is not used!!!!
console.log(docOne.name);
let resOne = {
    uuid: 23,
    resourceName: 'res one',
    data: { name: 'Res01', year: 2021 }
};
let resTwo = {
    uuid: 27,
    resourceName: 'res two',
    data: 'year 2021'
};
console.log(resOne);
console.log(resTwo);
// understanding Tuples --> same as Arrays but with type fixed for each index of an Array
let normalArr = ['mario', 26, true];
normalArr[0] = false;
// this is allowed in Arrays
let thisIsTuple = ['mario', 26, true];
// thisIsTuple[0]= false; <-- this is not allowed in Tuples
// this is allowed in Tuples since type is same
thisIsTuple[0] = 'luigi';
// we have used Tuples in the above Finance App

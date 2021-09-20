export class ListTemplate {
    // we have to to-do below
    // 1. register a ul (container) in the constructor
    // 2. create a render method to add a new li to the container i.e. ul 
    // -- accept arg -> list, heading, position
    // -- create a html template for a new li
    // -- add the li to the start/end of the list
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}

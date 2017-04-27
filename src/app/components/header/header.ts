import * as canny from "canny";


canny.add('header', () => {

    return {
        add : (node: HTMLElement) => {
            node.appendChild(document.createTextNode('header'))
        }
    }
});


export class Header {
    private template;
    constructor() {
        this.template = document.createElement('header');
        this.template.setAttribute('canny-mod', 'header')
    }
    get node(): HTMLElement {
        return this.template
    }
}
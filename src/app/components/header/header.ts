import * as canny from 'canny';
import * as headerTemplate from './header.html'


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
        let node = document.createElement('div');
        node.innerHTML = headerTemplate;
        this.template = node.children[0];
    }
    get node(): HTMLElement {
        return this.template
    }
}
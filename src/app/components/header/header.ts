import * as canny from 'canny';
import * as whisker from 'canny/mod/whisker';
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
    private whiskerRenderer;

    constructor() {
        let node = document.createElement('div');
        node.innerHTML = headerTemplate;
        this.template = node.children[0];
        whisker.add(this.template, (fc) => {
            this.whiskerRenderer = fc;
            this.whiskerRenderer({name:''});
        });
    }

    get node(): HTMLElement {
        return this.template
    }

    set data({text}) {
        this.whiskerRenderer(text);
    }
}
import * as canny from 'canny';
import { Header } from './components/header/header';

canny.add('app', () => {

    return {
        add : (node: HTMLElement) => {
            node.appendChild((new Header()).node);
            node.appendChild(document.createTextNode('Hello world'));
            canny.cannyParse(node);
        },
        ready : function () {
            console.log('app:ready');
        }
    }
});
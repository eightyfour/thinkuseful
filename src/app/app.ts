import * as canny from "canny";

canny.add('app', (c) => {

    var obj = Object.assign(null, c);
    return {
        add : (node: HTMLElement) => {
            node.appendChild(document.createTextNode('Hello world'));
        }
    }
});
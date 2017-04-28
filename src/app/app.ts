import * as canny from 'canny';
import { Component } from './components/component';

canny.add('app', () => {
    let component;
    return {
        add : (node: HTMLElement) => {
            component = new Component(node);
        },
        ready : function () {
            console.log('app:ready');
            component.components.header.data = {text : {name: 'Philipp'}};
        }
    }
});
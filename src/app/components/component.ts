import * as canny from 'canny';
import { Header } from './header/header';

const components = {
    header : new Header()
};

export class Component{
    private app:HTMLElement;

    constructor(app: HTMLElement) {
        this.app = app;
        this.app.appendChild(components.header.node);
        canny.cannyParse(this.app);
    }

    get components() {
        return components;
    }
}
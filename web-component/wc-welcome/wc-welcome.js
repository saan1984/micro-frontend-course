class Welcome extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
}

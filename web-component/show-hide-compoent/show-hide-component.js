class ShowHideComponent extends HTMLElement {
    constructor() {
        super();
        this.isShow = false;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
            :host .my-show-hide-container{
                background: #eee;
                border: 1px solid #ccc;
                cursor: pointer;
                padding: 9px 9px;
                border-radius: 5px;
            }
            ::slotted([slot='show-hide-title']){
                font-weight: bold;
                color: #708090;
            }
            ::slotted([slot='show-hide-content']){
                opacity: 0;
                height: 0px;
            }
            :host([show]) ::slotted([slot='show-hide-content']){
                opacity: 1;
                height: auto;
            }
            </style>
           <div class="my-show-hide-container">
            <slot name="show-hide-title"></slot>
            <slot name="show-hide-content"></slot>
           </div> 
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.hasAttribute('show')) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }

    open() {
        this.setAttribute('show', '');
        this.isShow = true;
    }

    hide() {
        if (this.hasAttribute('show')) {
            this.removeAttribute('show');
        }
        this.isShow = false;
    }
}

customElements.define('my-show-hide', ShowHideComponent);

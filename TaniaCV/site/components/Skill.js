"use strict"
export class Skill extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setTitle(...val){
        return this.setAttribute('title', val);
    }

    setLi(val){
        return this.setAttribute('items', val);
    }

    static get observedAttributes() {
        return ['items'];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = this.render();
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <div class="container">
                <div class="skills">
                    <h3 class="title">${this.getAttribute('title')}</h3>
                    <ul class="list__skills">
                    ${JSON.parse(this.getAttribute('items')).map(element => `<li>${element}</li>`).join('\n')}
                    </ul>
                </div>
        </div>
        `
    }
}

customElements.define('skill-element', Skill);
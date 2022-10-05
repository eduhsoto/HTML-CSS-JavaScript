"use strict"
export class Path extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setDate(val){
        return this.setAttribute('date', val);
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    static get observedAttributes() {
        return [''];
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
        <section class="path__timeline">
        <div class="container flex__columns">
            <h2 class="title__grade">Mi trayectoria</h2>
            
            <div class="card__">
                <div class="card__timeline timeline1">
                    <h4 class="name__bussines">${this.getAttribute('title')}</h4>
                    <p class="date__work">${this.getAttribute('date')}</p>
                    <p>${this.getAttribute('paragraph')}</p>
                </div>
            </div>
        </div>
    </section>
        `
    }
}

customElements.define('path-element', Path);
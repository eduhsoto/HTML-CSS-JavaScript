"use strict"
export class Head extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = this.render();
        
        this.$image = this.shadowRoot.querySelector('.image');
        this.getImage();
    }

    getImage(){
        this.$image.src = this.getAttribute('img');
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <section class="head">
            <img alt="profile image" class="image">
            <div class="description">
                <h1 class="name">${this.getAttribute('title')}</h1>
                <p class="description">${this.getAttribute('paragraph')}</p>
            </div>
        </section>
        <style>
        .image{
            width: 50%;
          }

        </style>
        `
    }
}

customElements.define('head-element', Head);
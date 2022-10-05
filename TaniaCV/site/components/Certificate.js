"use strict"
export class Certificate extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    setHref(val){
        return this.setAttribute('href', val);
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = this.render();

        this.getImage();
        this.getHref();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.certificate__image');
        this.$image.src = this.getAttribute('img');
    }

    getHref(){
        this.$href = this.shadowRoot.querySelector('.certificate__link');
        this.$href.href = this.getAttribute('href');
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <section class="certificates">
            <div class="container flex__columns">
                <div class="certificates__row">
                    <div class="certificate__group">
                        <img class="certificate__image">
                        <a class="certificate__link" target="_blank">Ver</a>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('certificate-element', Certificate);
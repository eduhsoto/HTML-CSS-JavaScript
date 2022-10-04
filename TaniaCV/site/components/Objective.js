"use strict"
export class Objective extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this._isListed = false;
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    set listed(val){
        this._isListed = val;
    }

    get listed(){
        return this._isListed;
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = this.render();

        this.getImage();
        this.generateList();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.card__image');
        this.$image.src = this.getAttribute('img');
    }

    generateList(){
        this.$adyacenElement = this.shadowRoot.querySelector('.text__objetives')
        let itemsList = ["Pasión","Respeto","Honestidad","Resposabilidad","Puntualidad","Trabajo en equipo"];
        
        if(this.listed !== false){
            let ul = document.createElement('ul');
            ul.classList.add("values");
            ul.innerHTML = `${itemsList.map(item => `<li>${item}</li>`).join('\n')}`
            this.$adyacenElement.insertAdjacentElement('afterend', ul)
        }
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <section class="objetives">
        <div class="container">
            <div class="card__objetives">
                <img  alt="goal image" class="card__image">
                <p class="text__objetives">${this.getAttribute('paragraph')}</p>
            </div>
        </div>
    </section>
        `
    }
}

customElements.define('objective-element', Objective);
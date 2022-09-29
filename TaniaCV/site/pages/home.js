import {Head} from "../components/Head.js";

export class Home extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = this.render();

        this.$headElement = this.querySelector('#head');
        this.generateHeadElement();
    }

    generateHeadElement(){
        let headElement = new Head();
        this.attributesHead(headElement);
        this.$headElement.appendChild(headElement);
    }

    attributesHead(component){
        component.setTitle( `Hola! <br> Mi nombre es Tania y soy diseñadora UX`);
        component.setParagraph("Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, resido actualmente en la ciudad de Guadalajara Jalisco México.");
        component.setImage("../assets/img/profile-tania.png")
      }

    disconnectedCallback(){
    }
    
    render(){
      return `
      <div id="head">
      </div>
      <h2>Técnico Superior Universitario</h2>
      <style>
      .image{
        width: 30%;
      }
     </style>
      `
    }
  }
  
  customElements.define('home-page', Home);

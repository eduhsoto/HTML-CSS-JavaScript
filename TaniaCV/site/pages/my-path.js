import {Head} from "../components/Head.js";
"use strict"

export class MyPath extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = this.render();
    this.$globalSection = this.querySelector("#head");
    this.generateHeadElement();
  }
  
  generateHeadElement(){
    let headElement = new Head();
    this.attributesHead(headElement);
    this.$globalSection.appendChild(headElement);
  }
  
  attributesHead(component){
    component.setTitle("Mi trayectoria en el mundo laboral");
    component.setParagraph("Soy una persona creativa apasionada por crear experiencias que satisfagan las necesidades humanas al utilizar tecnología.");
    component.setImage("./assets/img/path-image.png")
  }
  
  disconnectedCallback(){
  }
  
  render(){
    return `
    <section id="head">
    </section>
    `
  }
}

customElements.define("my-path", MyPath);
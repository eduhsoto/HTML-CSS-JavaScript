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
    component.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbnAVyRna7zQwFtQJQWxl72o_-7Fuo9VyBQ&usqp=CAU")
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
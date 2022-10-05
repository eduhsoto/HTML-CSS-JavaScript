import {Head} from "../components/Head.js";
import {Path} from "../components/Path.js";
"use strict"

export class MyPath extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = this.render();
    
    this.generateHeadElement();
    this.generatePathElement();
  }
  
  generateHeadElement(){
    this.$globalSection = this.querySelector("#head");
    let headElement = new Head();
    this.attributesHead(headElement);
    this.$globalSection.appendChild(headElement);
  }
  
  attributesHead(component){
    component.setTitle("Mi trayectoria en el mundo laboral");
    component.setParagraph("Soy una persona creativa apasionada por crear experiencias que satisfagan las necesidades humanas al utilizar tecnología.");
    component.setImage("./assets/img/path-image.png");
  }

  generatePathElement(){
    this.$path = this.querySelector("#path");
    let pathElement1 = new Path();
    let pathElement2 = new Path();
    let pathElement3 = new Path();
    this.attributesPath(pathElement1, pathElement2, pathElement3);
    this.$path.appendChild(pathElement1);
    this.$path.appendChild(pathElement2);
    this.$path.appendChild(pathElement3);
  }

  attributesPath(c1,c2,c3){
    c1.setTitle("SerimarqPrint");
    c1.setDate("Agosto 2015 - Febrero 2021");
    c1.setParagraph("Gerente General: Atención a proveedores, compras de materiales, encargado de producción, facturación en el portal del SAT, atención al cliente.");

    c2.setTitle("Esprezza");
    c2.setDate("Marzo  2021 - Abril  2021");
    c2.setParagraph("Gerente General: Atención a proveedores, compras de materiales, encargado de producción, facturación en el portal del SAT, atención al cliente.");

    c3.setTitle("IBM Student");
    c3.setDate("Abril  2021 - Abril 2022");
    c3.setParagraph("Diseño UX/UI: Creación de experiencias centradas en el usuario, utilizando herramientas cognitivas del pensamiento humano, psicología del color, técnicas para mejorar la usabilidad en la creación y seguimiento de procesos digitales para proporcionar herramientas que le sirvan a los desarrolladores e interesados para una visualización digital del diseño de las aplicaciones.<p>Maquetado de interfaces: Transformar el diseño de una web para que los navegadores puedan interpretarlos y reproducirlos correctamente en diferentes dispositivos.</p><p>Ayudante y estudiante de Analista de negocios: Creación de historias de usuario, desglosando el proceso en pequeñas partes utilizando la metodología de Design Thinking, generando soluciones de acuerdo a problemas previamente detectados, creación de propuestas en diseño visual ante nuevos requerimientos y creación de documentación.</p>");

  }
  
  disconnectedCallback(){
  }
  
  render(){
    return `
    <div id="head">
    </div>
    <div id="path">
    </div>
    <div id="path">
    </div>
    `
  }
}

customElements.define("my-path", MyPath);
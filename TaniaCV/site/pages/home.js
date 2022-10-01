import {Head} from "../components/Head.js";
import {Skill} from "../components/Skill.js"

export class Home extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = this.render();

        this.generateHeadElement();
        this.generateSkillElement();
    }

    generateHeadElement(){
      this.$headElement = this.querySelector('#head');

      let headElement = new Head();
      this.attributesHead(headElement);
      this.$headElement.appendChild(headElement);
    }

    attributesHead(component){
      component.setTitle( `Hola! <br> Mi nombre es Tania y soy diseñadora UX`);
      component.setParagraph("Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, resido actualmente en la ciudad de Guadalajara Jalisco México.");
      component.setImage("./assets/img/profile-tania.png")
    }

    generateSkillElement(){
      this.$skillElement = this.querySelector('#skills');

      let skillSoft = new Skill();
      let skillHard = new Skill();
      
      this.attributesSkill(skillSoft, skillHard);
      this.$skillElement.appendChild(skillSoft);
      this.$skillElement.appendChild(skillHard);
    }

    attributesSkill(skillSoft, skillHard){
      skillSoft.setTitle("Habilidades blandas");
      skillSoft.setLi('["Excelente comunicación oral y escrita.", "Trabajo en equipo y capacidad de liderazgo.", "Desarrollo de experiencias centradas en el ser humano.", "Capacidad de autoaprendizaje.", "Pensamiento estratégico."]');

      skillHard.setTitle("Habilidades técnicas");
      skillHard.setLi('["HTML, CSS, Bootstrap.", "Adobe XD.", "Figma.", "Invision Studio.", "Metodologías Ágiles (Manejo de tableros Scrum y Kanban).", "Design Thinking.", "Conocimiento de leyes cognitivas, creación de flujos, investigación de casos de uso y desarrollo de diseño visual."]');
  }

    disconnectedCallback(){
    }
    
    render(){
      return `
      <div id="head">
      </div>
      <section class="about__me">
        <div class="container">
            <div class="about__left">
                <h2 class="title__grade">Técnico Superior Universitario</h2>
                <p class="title__specialization">Especialista UX / UI orientada en el ser humano.</p>
                <p>Soy estudiante de Ingeniería en Tecnologías de la comunicación, área desarrollo y gestión de software.</p>
                <p>Tengo confianza en mi capacidad para generar ideas, trabajar en equipo, adquirir conocimientos y crecer profesionalmente.</p>
                <p>Mi pasión es crear y mejorar experiencias de los usuarios, pensando en el ser humano que utiliza las aplicaciones por medio de la tecnología, agilizando los procesos con diseños funcionales y atractivos.</p>
            </div>

            <div class="about__right">
                <img src="./assets/img/ux-image.png" alt="ux image" class="ux__image">
            </div>
        </div>
      </section>
      <div id="skills">
      </div>
      <style>
     </style>
      `
    }
  }
  
  customElements.define('home-page', Home);

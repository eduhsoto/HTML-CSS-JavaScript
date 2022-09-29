import {Home} from "../pages/home.js"
import {MyPath} from "../pages/my-path.js"
import {Portafolio} from "../pages/portafolio.js"

"use strict"

export class Router{
    constructor(){
        this.init();
    }

    static injectHTML(component){
        const $page = document.querySelector('#site');
        while($page.firstChild){
            $page.removeChild($page.firstChild);
        }
        $page.appendChild(component);
    }

    init(){
        this.routes = {
          "/": {path: '/', page: Home},
          "/my-path": {path: '/my-path', page: MyPath},
          "/portafolio": {path: '/portafolio', page: Portafolio}
        }
        
        this.defaultPage();
        
        const $links = document.querySelectorAll('a.item');
        
        $links.forEach(link => {
        link.addEventListener("click", e => this.navigate(e, link));
        })
    }

    navigate(e, link){
        e.preventDefault();
        window.history.pushState({}, "", e.target.href);
        this.url(link);
    }
    
    url(link) {
        let hrf = link.getAttribute("href");
        let location = window.location.pathname;
        location = hrf;
            
        this.defaultPage(hrf, location);
    }
      
    defaultPage(hrf = "/", location){
        location = hrf;
        
        const {routes} = this;
        const route = routes[location];
        Router.injectHTML(new route.page);  
    }
}
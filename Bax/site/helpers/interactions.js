const activeNav = (() => {
    const $links = document.querySelectorAll("a.item");
    $links.forEach(link => {
    let currentLocation = window.location.pathname;
    let active = currentLocation;
    let linkMenu = link.getAttribute("href");
        if(linkMenu === active){
            link.classList.add('active__page');
        }
    });
})();

const showMenu = (() => {
    let $hamburger = document.querySelector('.nav__hamburger');
    let $nav = document.querySelector('.nav__responsive');

    const showHidden = () => {
        $nav.classList.toggle("show__menu");
        $hamburger.classList.toggle("active");
    }

    $hamburger.addEventListener('click', showHidden);
})(); 

const animationScroll = (() => {
    let $objectAnimate = document.querySelectorAll('.object__animate');
    const animaClases = ["show", "show", "zoomIn", "zoomIn", "zoomIn", "zoomIn", "zoomIn", "zoomIn", "show", "show", "zoomIn"];
    const oberserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const currentIndex = Array.from($objectAnimate).indexOf(entry.target);
            
            if(entry.isIntersecting){
                $objectAnimate[currentIndex].classList.add(animaClases[currentIndex]);
            }else{
                $objectAnimate[currentIndex].classList.remove(animaClases[currentIndex]);
            }
        })
    });

    $objectAnimate.forEach(objectAnimate => {
        oberserver.observe(objectAnimate);
    })

})();

const hashScroll = (() => {
    let $hashActive = document.querySelectorAll('.hash__active');
    const $links = document.querySelectorAll('a.hash');
    const $noHashLink = document.querySelector("a.home");
   
    const oberserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const currentIndex = Array.from($hashActive).indexOf(entry.target);
            
            if(entry.isIntersecting){
                $links[currentIndex].classList.add('active__page');
                $noHashLink.classList.remove('active__page');
            }else{
                $links[currentIndex].classList.remove('active__page');
                $noHashLink.classList.add('active__page');
            }
        })
    });

    $hashActive.forEach(hashActive => {
        oberserver.observe(hashActive);
    })

})();
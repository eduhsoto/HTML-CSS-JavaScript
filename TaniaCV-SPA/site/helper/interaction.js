export const showMenu = () => {
    let $hamburger = document.querySelector('.nav__hamburger');
    let $nav = document.querySelector('.nav__responsive');
    let $lines = document.querySelector('.lines')

    const showHidden = () => {
        $nav.classList.toggle("show__menu");
        $hamburger.classList.toggle("active");
    }

    $hamburger.addEventListener('click', showHidden);
} 

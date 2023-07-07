//Navigation
const navigationButton = document.querySelector('.menu-collapser');
const collapsedNavigationMenu = document.querySelector('.navigation-menu-collapse');

let isMenuOpen = false;

navigationButton.addEventListener('click', () => {
    collapsedNavigationMenu.style.transform = 'translateY(0%)';
    if (isMenuOpen === false) {
        collapsedNavigationMenu.style.marginTop = `${0}px`;
        isMenuOpen = true;
    } else {
        collapsedNavigationMenu.style.marginTop = `-${collapsedNavigationMenu.clientHeight}px`;
        isMenuOpen = false;
    }
});
//Navigation
const navigationButton = document.querySelector('.menu-collapser');
const collapsedNavigationMenu = document.querySelector('.navigation-menu-collapse');
const projectsButton = document.querySelector('.projects');
const projectsButtonTwo = document.querySelector('.projects-two');
const projectsMenu = document.querySelector('.projects-menu-collapse');

let isMenuOpen = false;
let isProjectsMenuOpen = false;

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

projectsButton.addEventListener('click', () => {
    projectsMenu.style.transform = 'translateY(0%)';
    if (isProjectsMenuOpen === false) {
        projectsMenu.style.marginTop = '0px';
        isProjectsMenuOpen = true;
    } else {
        projectsMenu.style.marginTop = `-${projectsMenu.clientHeight}px`;
        isProjectsMenuOpen = false;
    }
});

projectsButtonTwo.addEventListener('click', () => {
    projectsMenu.style.transform = 'translateY(0%)';
    if (isProjectsMenuOpen === false) {
        projectsMenu.style.marginTop = '0px';
        isProjectsMenuOpen = true;
    } else {
        projectsMenu.style.marginTop = `-${projectsMenu.clientHeight}px`;
        isProjectsMenuOpen = false;
    }
});
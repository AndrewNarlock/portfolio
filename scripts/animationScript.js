const stars = document.querySelectorAll('.star');
const titleletter = document.querySelectorAll('.title-letter');
const ufo = document.querySelector('.ufo-container');
const ufoDisk = document.querySelector('.ufo-disk');
const ufoLight = document.querySelector('.ufo-light');
const ufoOrb = document.querySelector('.ufo-orb');
const ground = document.querySelector('.camp-base');
const groundContainer = document.querySelector('.campground-container');

let leftPos = 0;
let topPos = 0;
let starNumber = 0;
let isDragging = false;
let windowXPos = window.innerWidth / 2;
let ufoSpec = ufo.getBoundingClientRect();

let moveLetters = function () {
    for (let i = 0; i < titleletter.length; i++) {
        let randNum = (Math.floor(Math.random() * 3)) * 1000;
        setTimeout(() => {
            titleletter[i].style.animationName = 'floating';
        }, randNum);
    };
};

let placeStars = function () {
    for (let i = 0; i < stars.length; i++) {
        leftPos = Math.floor(Math.random() * 100);
        topPos = Math.floor(Math.random() * 70);
        stars[i].style.left = `${leftPos}%`;
        stars[i].style.top = `${topPos}%`;
    };
};

let starSparkle = function () {
    setInterval(() => {
        starNumber = Math.floor(Math.random() * stars.length);
        stars[starNumber].style.width = '5px';
        stars[starNumber].style.height = '5px';
        stars[starNumber].style.boxShadow = '0px 0px 25px white';
        setTimeout(() => {
            stars[starNumber].style.width = '1px';
            stars[starNumber].style.height = '1px';
        }, 1000);
    }, 2000);
};

ufo.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = ufo.offsetLeft - e.clientX;
    offsetY = ufo.offsetTop - e.clientY;
});

ufo.addEventListener('mouseup', () => {
    isDragging = false;
});

ufo.addEventListener('touchstart', (e) => {
    isDragging = true;
    offsetTouchX = ufo.offsetLeft - e.touches[0].clientX;
    offsetTouchY = ufo.offsetTop - e.touches[0].clientY;
});

ufo.addEventListener('touchend', () => {
    if (ufoDisk.getBoundingClientRect().bottom >= groundContainer.getBoundingClientRect().top) {
        ufo.style.top = `${1090}px`;
    }
    isDragging = false;
});

ufo.addEventListener('touchmove', (e) => {
    if (isDragging) {
        if (ufoDisk.getBoundingClientRect().bottom >= groundContainer.getBoundingClientRect().top) {
            ufo.style.left = `${e.touches[0].clientX + offsetTouchX}px`;
            ground.style.left = `${e.clientY - (ground.getBoundingClientRect().width / 2) + 10}px`;
        } else {
            ufo.style.left = `${e.touches[0].clientX + offsetTouchX}px`;
            ufo.style.top = `${e.touches[0].clientY + offsetTouchY}px`;
            ground.style.left = `${e.clientY - (ground.getBoundingClientRect().width / 2) + 10}px`;
            ufoLight.style.width = `${e.touches[0].clientY + 300}px`;
            ground.style.width = `${e.touches[0].clientY + 700}px`;
        }
    };
});

document.addEventListener('mouseup', () => {
    if (ufoDisk.getBoundingClientRect().bottom >= groundContainer.getBoundingClientRect().top) {
        ufo.style.top = `${1090}px`;
    }
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        if (ufoDisk.getBoundingClientRect().bottom >= groundContainer.getBoundingClientRect().top) {
            ufo.style.left = `${e.clientX + offsetX}px`;
            ground.style.left = `${e.clientX - (ground.getBoundingClientRect().width / 2) + 10}px`;
        } else {
            ufo.style.left = `${e.clientX + offsetX}px`;
            ufo.style.top = `${e.clientY + offsetY}px`;
            ground.style.left = `${e.clientX - (ground.getBoundingClientRect().width / 2) + 10}px`;
            ufoLight.style.width = `${e.clientY + 300}px`;
            ground.style.width = `${e.clientY + 700}px`;
        }
    };
});

window.addEventListener('load', () => {
    ufo.style.left = `${windowXPos - (ufoSpec.width / 2)}px`;
    ufo.style.top = `${(window.innerHeight / 2) + 200}px`;
    ufoLight.style.width = `${200}px`;
    ufo.style.touchAction = 'none';
    ground.style.width = `${800}px`;
    moveLetters();
    placeStars();
    starSparkle();
});

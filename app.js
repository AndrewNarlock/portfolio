const cardWrapper = document.querySelector('.card-wrapper');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const nextBtnClasses = btnNext.classList;
const mql = window.matchMedia('(max-width: 990px)');

let count = 550;
let tracker = 0;

btnNext.addEventListener('click', () => {
    slideControlNextBig();
});

btnPrev.addEventListener('click', () => {
    slideControlPrevBig();
});


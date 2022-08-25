window.addEventListener('load', () => {
    btnPrev.classList.add('disabled');
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function (el, i, arr) {
        el.style.transform = `translateX(550px)`;
    });
})

function slideControlNextBig() {
    count = count - 400;
    tracker++;
    if (tracker === -1) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }
    if (tracker === 4) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;

    });

}

function slideControlPrevBig() {
    count = count + 400;
    tracker--;
    if (tracker === -1) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }
    if (tracker === 4) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`
    });
}
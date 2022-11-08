//Hero Text Loading Animation -------------------------------------------

//Grabbing elements to load
const heroTitle = document.querySelector('.hero-title');
const heroTitleShadow = document.querySelector('.hero-title-shadow');
const heroText = document.querySelector('.hero-p');
const heroTextShadow = document.querySelector('.hero-p-shadow');
const heroButt = document.querySelector('.hero-butt');
const heroButtShadow = document.querySelector('.hero-butt-shadow');

//Functions for changing opacity of html
const loadHeroTitle = function(){
    heroTitle.style.opacity = '1';
    heroTitleShadow.style.opacity = '1';
}

const loadHeroText = function(){
    heroText.style.opacity = '1';
    heroTextShadow.style.opacity = '1';
}

const loadHeroButt = function(){
    heroButt.style.opacity = '1';
    heroButtShadow.style.opacity = '1';
}

//Window on load event with timers
window.addEventListener('load', (e) => {
    setTimeout(loadHeroTitle, 500);
    setTimeout(loadHeroText, 1500);
    setTimeout(loadHeroButt, 2500);
});


//Carousel JS ----------------------------------------------------------------------------------------------


//Select elements and getting measurements for button placements.
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const prevPos = document.querySelector('.prev-cont');
const nextPos = document.querySelector('.next-cont');

const prevWidth = prev.offsetWidth;
const nextWidth = next.offsetWidth;
const prevHeight = next.offsetHeight;
const nextHeight = next.offsetHeight;
const cardWidth = document.querySelector('.card').offsetWidth;
const containerHeightValue = document.querySelector('.carousel-container').offsetHeight;
const containerChildValue = document.querySelector('.carousel-container').childElementCount;


//adjust button styles based on screen size.
const screenStyles = function () {
    const containerWidthValue = document.querySelector('.carousel-container').offsetWidth;

    if (containerWidthValue >= 400) {
        prevPos.style.marginRight = `${containerWidthValue + prevWidth + 20}px`;
        nextPos.style.marginLeft = `${containerWidthValue + nextWidth + 20}px`;

        prevPos.style.marginTop = `0px`;
        nextPos.style.marginTop = `0px`;

        prev.style.padding = `100px 10px 100px 10px`;
        next.style.padding = `100px 10px 100px 10px`;

    } else {
        prevPos.style.marginRight = `${prevWidth + 100}px`;
        nextPos.style.marginLeft = `${nextWidth + 100}px`;

        prevPos.style.marginTop = `${containerHeightValue + prevHeight - 2}px`;
        nextPos.style.marginTop = `${containerHeightValue + nextHeight - 2}px`;

        prev.style.padding = `0px 30px 0px 30px`;
        next.style.padding = `0px 30px 0px 30px`;

    }
};


//Places buttons on load.
window.addEventListener('load', () => {
    screenStyles();

});


//Adjusts buttons on window resize.
window.addEventListener('resize', (event) => {
    screenStyles();

});



//Set counter for setting distance for cards to move on each click
let count = 0;

//Set tracker to keep track of where the controls and cards are in relation to the card container
let tracker = 0;

//Action for Next button
const moveCardsLeft = function () {
    //Count controls the distnace for each card push and can be adjusted by changing the integer.
    //The tracker keeps track of the index while the next and prev buttons are being clicked.
    count = count - cardWidth - 100;
    tracker++;

    //disables buttons after cards reach a specified distance.
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === containerChildValue - 1) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }

    //Pushes cards based on count. 
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}

//Action for Prev button
const moveCardsRight = function () {
    count = count + cardWidth + 100;
    tracker--;
    if (tracker <= 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === containerChildValue - 1) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}

//Event listeners to slide the cards.
prev.addEventListener('click', () => {
    moveCardsRight();
});

next.addEventListener('click', () => {
    moveCardsLeft();
});

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

//Select the buttons 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//Set counter for setting distance for cards to move on each click
let count = 0;

//Set tracker to keep track of where the controls and cards are in relation to the card container
let tracker = 0;

//Action for Next button
function moveCardsLeft() {
    //'Count' controls the distnace for each card push and can be adjusted by changing the integer subtracted from the variable below.
    //The tracker keeps track of the index while the next and prev buttons are being clicked.
    count = count - 370;
    tracker++;

    //Disables buttons after cards reach a specified distance. Number of clicks can be adjusted by changing the integers in the if statements. ie. changing the '0' to '-1' allows the user to click back one additional time before disabling the 'prev' button.
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 4) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }

    //Pushes cards based on 'count'. 
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}

//Action for Prev button
function moveCardsRight() {
    count = count + 370;
    tracker --;
    if (tracker <= 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 4) {
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
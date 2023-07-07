//Carousel
const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');

//Tracks margin.
let track = 0;

//Tracks image position.
let counter = 1;

//Loads images into carousel.
window.addEventListener('load', () => {
    for (let i = 0; i < carouselImages.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('image-wrapper');
        newDiv.classList.add(`wrapper-${i + 1}`);
        let newImg = document.createElement('img');
        let newDescriptionContainer = document.createElement('div');
        let newTitle = document.createElement('h3');
        let newDescription = document.createElement('p');
        let newLink = document.createElement('a');
        newImg.classList.add('carousel-image');
        newImg.setAttribute('loading', 'lazy');
        newImg.setAttribute('alt', `${carouselImages[i].alt}`);
        newLink.setAttribute('href', `${carouselImages[i].pagePath}`);
        newDescriptionContainer.classList.add('carousel-description-container');
        newTitle.classList.add('carousel-title');
        newDescription.classList.add('carousel-description');
        newLink.classList.add('carousel-project-link');
        newImg.src = carouselImages[i].imagePath;
        newTitle.innerHTML = `${carouselImages[i].title}`;
        newDescription.innerHTML = `${carouselImages[i].description}`;
        newLink.innerHTML = 'View Project';
        newDiv.appendChild(newImg);
        newDescriptionContainer.appendChild(newTitle);
        newDescriptionContainer.appendChild(newDescription);
        newDescriptionContainer.appendChild(newLink);
        newDiv.appendChild(newDescriptionContainer);
        imageContainer.appendChild(newDiv);
    }
    return wrapperOne = document.querySelector('.wrapper-1');
});

//Moves images left.
const moveImagesLeft = function () {
    if (counter < carouselImages.length) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

//Moves images right.
const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

//Moves images left.
rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

//Moves images right.
leftButton.addEventListener('click', () => {
    moveImagesRight();
});
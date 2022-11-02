//Dropdown menu
const dropdown = document.querySelector('.container');
const dropdownSmall = document.querySelector('.container-small');

track = 0;
trackSmall = 0;

dropdown.addEventListener('click', () => {
    const container = document.querySelector('.item-container');

    if (track === 0) {
        container.style.maxHeight = '700px';
        track++;
    } else {
        container.style.maxHeight = '0px';
        track--;
    }
});

//Responsive Navigation

dropdownSmall.addEventListener('click', () => {
    const containerSmall = document.querySelector('.item-container-small');

    if (trackSmall === 0) {
        containerSmall.style.maxHeight = '700px';
        trackSmall++;
    } else {
        containerSmall.style.maxHeight = '0px';
        trackSmall--;
    }
})



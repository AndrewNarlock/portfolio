//Menu Loading
const menuOneAppetizers = document.querySelector('.menu-one-container-one');
const menuOneCourses = document.querySelector('.menu-one-container-two');
const menuTwoAppetizers = document.querySelector('.menu-two-container-one');
const menuTwoCourses = document.querySelector('.menu-two-container-two');
const menuThreeDrinksOne = document.querySelector('.menu-three-container-one');
const menuThreeDrinksTwo = document.querySelector('.menu-three-container-two');


const loadMenuData = function (menuData, menuPage) {
    for (let i = 0; i <= menuData.length - 1; i++) {
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('food-container');
        const newFoodName = document.createElement('h3');
        const newFoodDesc = document.createElement('p');
        const newFoodPrice = document.createElement('p');
        newFoodName.classList.add('food-title');
        newFoodDesc.classList.add('food-description');
        newFoodPrice.classList.add('food-price');
        newFoodName.innerHTML = `${menuData[i].foodname}`;
        newFoodDesc.innerHTML = `${menuData[i].fooddesc}`;
        newFoodPrice.innerHTML = `${menuData[i].foodprice}`;
        foodContainer.appendChild(newFoodName);
        foodContainer.appendChild(newFoodDesc);
        foodContainer.appendChild(newFoodPrice);
        menuPage.appendChild(foodContainer);
    };
};

window.addEventListener('load', () => {
    loadMenuData(menuOneDataOne, menuOneAppetizers);
    loadMenuData(menuOneDataTwo, menuOneCourses);
    loadMenuData(menuTwoDataOne, menuTwoAppetizers);
    loadMenuData(menuTwoDataTwo, menuTwoCourses);
    loadMenuData(menuThreeDataOne, menuThreeDrinksOne);
    loadMenuData(menuThreeDataTwo, menuThreeDrinksTwo);
});


//Change Menu
const menuOneTab = document.querySelector('.menu-one-tab');
const menuTwoTab = document.querySelector('.menu-two-tab');
const menuThreeTab = document.querySelector('.menu-three-tab');
const menuOne = document.querySelector('.menu-one')
const menuTwo = document.querySelector('.menu-two')
const menuThree = document.querySelector('.menu-three')

let menuToggle = 1;

const showMenu = function () {
    if (menuToggle === 1) {
        menuTwo.style.display = 'none';
        menuThree.style.display = 'none';
        menuOne.style.display = 'flex';
    } else if (menuToggle === 2) {
        menuOne.style.display = 'none';
        menuThree.style.display = 'none';
        menuTwo.style.display = 'flex';
    } else if (menuToggle === 3) {
        menuOne.style.display = 'none';
        menuTwo.style.display = 'none';
        menuThree.style.display = 'flex';
    }
};

menuOneTab.addEventListener('click', () => {
    menuToggle = 1;
    showMenu();
});
menuTwoTab.addEventListener('click', () => {
    menuToggle = 2;
    showMenu();
});
menuThreeTab.addEventListener('click', () => {
    menuToggle = 3;
    showMenu();
});
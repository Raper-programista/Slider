const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img');

//Images
const prevImage = document.querySelector('#previously-slide');
const centerImage = document.querySelector('#slide-center');
const nextImage = document.querySelector('#next-slide');

//Buttons
const prevButton = document.querySelector('#previousy-button');
const nextButton = document.querySelector('#next-button');

const LAST = 5;
let counter = 1;

function createDiv(numImage, divImage) {

    var idName = divImage.id;
    var className = divImage.classList[0]

    divImage.innerHTML = (
        '<div id="' +idName+ '" class="' +className+ '">'
            + '<img src="./img/cars/' +numImage+ '.png" alt="">' +
        '</div>'
    ) 
}

function nextNum(num) {

    if(num === 1)
        return LAST;
    else
        return --num;
}

function prevNum(num) {

    if(num === LAST)
        return 1
    else
        return ++num;
}

function changeDivs() {

    const prev = prevNum(counter);
    const next = nextNum(counter);

    createDiv(prev, prevImage);
    createDiv(counter, centerImage);
    createDiv(next, nextImage);
}

prevButton.addEventListener('click', () => {

    counter = prevNum(counter);
    changeDivs();
    
})

nextButton.addEventListener('click', () => {

    counter = nextNum(counter);
    changeDivs()
})



/*
let counter = 1;
const size = image[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextButton.addEventListener('click', () => {
    if(counter >= image.length) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

previousButton.addEventListener('click', () => {
    
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

slide.addEventListener('transitionend', () => {
    if(image[counter].id === 'last-clone'){
        slide.style.transform = "none";
        counter = image.length-2
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(image[counter].id === 'first-clone'){
        slide.style.transform = "none";
        counter = image.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})*/
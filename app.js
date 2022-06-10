const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img');

//Button
const previousButton = document.querySelector('#previousy-button');
const nextButton = document.querySelector('#next-button');

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
})
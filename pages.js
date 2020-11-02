//Track page number
let pageNumber = 0;

//Content for pages 
const pages = [
    {copy: "a Brooklyn-based graphic designer", background: '#edc7a9', circle: '#3e78ed'},
    {copy: "Kanye West's biggest fan", background: '#a1fffe', 
    circle: '#e34a47'},
    {copy: "looking for a job at the start of October", background: '#d3c7f3',
    circle: '#f7fe00'},
    {copy: `letting you <a href="pdf.pdf">download her PDF</a>`, background: '#faffb8',
    circle: '#b472e6'}
]

//Pick the relevant tags
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".prev");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

//Next function
const next = function() {
    pageNumber++;
    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }
    updateSection(); 
 }

//Previous function
const previous = function() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    }
    updateSection(); 
}

//Update section's content and style
const updateSection = function() {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor= pages[pageNumber].background;
}

//On click of nextTag, run this
nextTag.addEventListener('click', function() {
    next();
}) 

//On click of previousTag, run this
previousTag.addEventListener('click', function() {
    previous();
}) 


// Random


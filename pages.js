//Track page number
let pageNumber = 0;

//Content for pages 
const pages = [
    {copy: "a Brooklyn-based graphic designer", background: '#edc7a9', circle: '#3e78ed'},
    {copy: "Harry Styles' biggest fan", background: '#a1fffe', 
    circle: '#e34a47'},
    {copy: "looking for a job at the start of October", background: '#d3c7f3',
    circle: '#f7fe00'},
    {copy: `letting you <a href="pdf.pdf">download her PDF</a>`, background: '#faffb8',
    circle: '#b472e6'}
]

//Pick the relevant tags
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".prev");
const randomTag = document.querySelector('.random')
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

//Pick a random slide 
const random = function() {
    pageNumber = Math.floor(Math.random() * pages.length);
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

//On click of randomTag, run this
randomTag.addEventListener('click', function() {
    random();
})

//When a user presses a key, check for arrow left or right and do next or prev

document.addEventListener("keyup", function(event) {
   console.log(event);
   
   if (event.key == "ArrowRight") {
       next();
   }

   if (event.key == "ArrowLeft") {
    previous();
}
})

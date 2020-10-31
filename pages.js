//Track page number
let pageNumber = 0;

//Content for pages 
const pages = [
    {copy: "a Brooklyn-based graphic designer"},
    {copy: "Kanye West's biggest fan"},
    {copy: "looking for a job at the start of October"},
    {copy: `letting you <a href="pdf.pdf">download her PDF</a>`}
]

//Pick the relevant tags
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".prev");
const outputTag = document.querySelector("h2");

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


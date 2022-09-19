const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let images = [1, 2,
    3, 4, 5];

/* Declaring the alternative text for each image file */
let alts = [1, 2,
    3, 4, 5];

/* Looping through images */
function setImg(src, alt) {
    displayedImage.src = src;
    displayedImage.alt = alt;
}

function thumbImgClicked(e) {
    setImg(e.target.src, e.target.alt);
}

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${images[i]}.jpg`);
    newImage.setAttribute('alt', `images/pic${alts[i]}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.onclick = thumbImgClicked;
}

/* Wiring up the Darken/Lighten button */
function btnlightnessClicked(e) {

    if (e.target.class === 'dark' || typeof e.target.class === 'undefined') {
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        e.target.class = "light";
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        e.target.class = "dark";
    }
}
btn.onclick = btnlightnessClicked;

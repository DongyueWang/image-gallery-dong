const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let images = ['images/pic1.jpg', 'images/pic2.jpg',
    'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
let alts = ['images/pic1.jpg', 'images/pic2.jpg',
    'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

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
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alts[i]);
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

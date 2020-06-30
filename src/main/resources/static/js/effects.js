let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let index = 1;
viewSlides(index);

function presentSlide(n) {
    viewSlides(index = n);
}

function viewSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery");
    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}

let video = document.getElementById("backgroundVideo");
let pauseButton = document.getElementById("pause");
let playButton = document.getElementById("play");

function pauseVideo() {
     if (!video.paused) {
        video.pause();
        pauseButton.innerHTML = "Pause";
    }
}

function playVideo() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "Play";
    }
}
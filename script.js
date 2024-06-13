"use strict";

// DOM variable
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

const $favBtn = document.querySelectorAll('.fav-btn');

const $header = document.querySelector("[data-header]")

const $video = document.getElementById('myVideo');
const $playButton = document.querySelector('.play-btn');
const $playButtonIcon = document.querySelector('.play-btn > .fa-solid.fa-play');


// navbar toggle 
$navToggler.addEventListener("click", () =>
    $navbar.classList.toggle("active")
);

// header scroll state
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// yellowStar
$favBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.fa-star');
        if (icon.classList.contains('fa-regular')) {
            icon.className = "fa-solid fa-star";
        } else {
            icon.className = "fa-regular fa-star";
        }
    });
});

// video player


$playButton.addEventListener('click', function () {
    if ($video.paused) {
        $video.play();
        $playButtonIcon.classList.add("active");
    } else {
        $video.pause();
        $playButtonIcon.classList.remove("active");
    }
});

$video.addEventListener('click', function () {
    if ($video.paused) {
        $video.play();
        $playButtonIcon.classList.add("active");
    } else {
        $video.pause();
        $playButtonIcon.classList.remove("active");
    }
});


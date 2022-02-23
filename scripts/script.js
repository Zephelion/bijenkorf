// JavaScript Document
const toggleBtn = document.querySelector(".dropdown-menu");
const menu = document.querySelector(" body > section");
const closeBtn = document.querySelector(".close-btn");
const sound = new Audio("sound/swoosh.mp3");
const stickyNav = document.querySelector("header nav:nth-of-type(3)");
const toggleBtnSticky = document.querySelector(".dropdown-menu-sticky");
const preloader = document.querySelector('.preloader');
const datum = document.querySelector("header > div > a");
const searchBar = document.querySelector(".search");
const list = document.querySelector(".list");


searchBar.addEventListener("input", (e) => {
    if(e.target.value !== ""){
        list.classList.add("open");
    }else{
        list.classList.remove("open");
    }

    console.log(e.target.value)
})


const month = ['Januari',
'Februari',
'Maart',
'April',
'Mei',
'Juni',
'Juli',
'Augustus',
'September',
'Oktober',
'November',
'December',
]



var options = {
    valueNames: [ 'name', ]
};

new List('search-list', options);


const vandaag = new Date();
const morgen = new Date(vandaag);

morgen.setDate(morgen.getDate() + 1);

const dag = morgen.getDate();
let maand = morgen.getMonth();

maand = month[maand];

datum.textContent = `Nu besteld, morgen ${dag} ${maand} gratis in huis`;


toggleBtnSticky.addEventListener("click", function(){
    sound.load();
    sound.play();
    menu.classList.toggle("schuif");
})


window.addEventListener("scroll", () => {
    var y = window.scrollY;

    if(y > 86){
        stickyNav.classList.add("flex");
    }else{
        stickyNav.classList.remove("flex");
    }
})


window.addEventListener('load', () => {
    setTimeout( () => {
        preloader.classList.add("hide-preloader");
    }, 2000);
})



toggleBtn.addEventListener("click", function(){
    sound.load();
    sound.play();
    menu.classList.toggle("schuif");
})

closeBtn.addEventListener("click", function(){
    sound.load();
    sound.play();
    menu.classList.remove("schuif");
})


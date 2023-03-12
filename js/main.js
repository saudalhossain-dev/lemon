// Header Scroll Part JS Start
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    } else{
        nav.classList.remove("header-scrolled");
    }
}

// Nav Hide Part JS Start
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
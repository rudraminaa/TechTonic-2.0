let hamburger=document.getElementById("hamburger");
let navLinks=document.getElementById("NavLinks");
hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("active");
})
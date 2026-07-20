// script.js


// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".section, .hero-content"
);


const revealOnScroll = () => {

    const triggerPoint = window.innerHeight * 0.85;


    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < triggerPoint){

            element.classList.add("show");

        }

    });

};



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();





// Navbar shrink effect

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        navbar.style.padding = "10px 25px";

    }

    else {

        navbar.style.padding = "16px 25px";

    }


});






// Active navigation indicator


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});






// Smooth scrolling


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener(
        "click",
        function(event){


            const target = document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                event.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });

            }


        }
    );


});







// Mobile menu


const menuButton = document.querySelector(".mobile-menu");

const nav = document.querySelector(".nav-links");



menuButton.addEventListener("click", () => {


    nav.classList.toggle("open");


});






// Subtle hero parallax effect


const blobs = document.querySelectorAll(".blob");


window.addEventListener("scroll", () => {


    const scroll = window.scrollY;


    blobs.forEach((blob,index)=>{


        blob.style.transform =
        `translateY(${scroll * (0.03 + index * 0.02)}px)`;


    });


});






// Project cards hover interaction


const cards = document.querySelectorAll(".project-card");


cards.forEach(card => {


    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
            "0 25px 50px rgba(15,23,42,0.12)";

        }
    );



    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
            "0 20px 40px rgba(15,23,42,0.08)";

        }
    );


});

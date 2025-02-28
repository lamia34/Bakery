// Up Icon
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 770) {
        scrollToTopButton.classList.add("show"); 
    } else {
        scrollToTopButton.classList.remove("show"); 
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});




// Header Hidden
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 820) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    if (window.scrollY > 0.0001) {  
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
});



// Burger Menu Open
document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".burger_button");
    const closeButton = document.querySelector(".fa-xmark");
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerMenuLeft = document.querySelector(".brgmenu-left");

    burgerButton.addEventListener("click", function () {
        burgerMenu.classList.add("brg-active");
    });

    burgerMenu.addEventListener("click", function (event) {
        if (event.target === burgerMenuLeft || event.target === closeButton) {
            burgerMenu.classList.remove("brg-active");
        }
    });
});


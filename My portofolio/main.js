//onclick the navbar//
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelector('.Navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('AboutMe');
};

//typing animations//
const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Muhammad Akram";
    }, 0);
    setTimeout(() => {
        text.textContent = "Network Engineer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Student";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


//Animations the slide scroll//
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // if want to use repeating animation on scroll, use this
        else {
            sec.classList.remove('show-animate');
        }
    });
};


//Button Back//
let getTombol = document.getElementById("Back");

window.addEventListener("scroll", function () {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        getTombol.style.display = "block";
    } else {
        getTombol.style.display = "none";
    }
});

getTombol.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
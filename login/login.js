
window.addEventListener("load", function () {
    var preloader = document.getElementById("preload");
    var content = document.getElementById("content");

    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 2090);
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    let menu = document.getElementById("custom-menu");
    menu.style.top = event.pageY + "px";
    menu.style.left = event.pageX + "px";
    menu.style.display = "block";
});

document.addEventListener("click", function () {
    document.getElementById("custom-menu").style.display = "none";
});

const drkltmode = document.querySelector(".drkltmode");
const sliderIcon = document.querySelector(".slider i");
const body = document.body;

if (localStorage.getItem("theme") === "on") {
    body.classList.add("on");
    sliderIcon.classList.replace("fa-moon", "fa-sun");
}

drkltmode.addEventListener("click", () => {
    body.classList.toggle("on");

    if (body.classList.contains("on")) {
        sliderIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "on");
    } else {
        sliderIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "off");
    }
})


function menuHide() {
    const box = document.getElementById("box");
    const menu = document.getElementById("menu");

    if (window.innerWidth < 600) {
        box.addEventListener("mouseenter", () => {
            menu.style.display = "none";
        })

        box.addEventListener("mouseleave", () => {
            menu.style.display = "block";
        })
    } else {
        menu.style.display = "block"
    }
}

menuHide();
window.addEventListener("resize", menuHide);


const loginForm = document.querySelector(".loginBx");
const registerForm = document.querySelector(".signBx");
const wrapper = document.querySelector(".box");

function loginFunction() {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
        wrapper.style.height = "70vh";
        wrapper.style.width = "90vw";
        wrapper.addEventListener("mouseenter", () => {
            wrapper.style.height = "70vh";
            wrapper.style.width = "90vw";
        });

        wrapper.addEventListener("mouseleave", () => {
            wrapper.style.height = "30vh";
            wrapper.style.width = "60vw";
        });
    } else {

        wrapper.style.height = "500px";
        wrapper.style.width = "450px";
        wrapper.addEventListener("mouseenter", () => {
            wrapper.style.height = "500px";
            wrapper.style.width = "450px";
        });

        wrapper.addEventListener("mouseleave", () => {
            wrapper.style.height = "200px";
            wrapper.style.width = "400px";
        });
    }
}

function signupFunction() {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    registerForm.style.top = "-100px";

    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
        wrapper.style.height = "80vh";
        wrapper.style.width = "90vw";
        registerForm.style.width = "80vw";
        wrapper.addEventListener("mouseenter", () => {
            wrapper.style.height = "80vh";
            wrapper.style.width = "90vw";
        });

        wrapper.addEventListener("mouseleave", () => {
            wrapper.style.height = "30vh";
            wrapper.style.width = "60vw";
        });
    } else {
        wrapper.style.height = "650px";
        wrapper.style.width = "550px";

        wrapper.addEventListener("mouseenter", () => {
            wrapper.style.height = "650px";
            wrapper.style.width = "550px";
        });

        wrapper.addEventListener("mouseleave", () => {
            wrapper.style.height = "200px";
            wrapper.style.width = "400px";
        });
    }

}

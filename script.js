window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 2090);
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
    let menu = document.getElementById("custom-menu");
    menu.style.top = event.pageY + "px";
    menu.style.left = event.pageX + "px";
    menu.style.display = "block";
});

document.addEventListener("click", function() {
    document.getElementById("custom-menu").style.display = "none";
});

function menuAction() {
    document.getElementById("custom-menu").style.display = "none";
}

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

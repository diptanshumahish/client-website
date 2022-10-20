var menuActive = false;
document.getElementById("menuButton").addEventListener('click', function () {
    if (menuActive == false) {
        document.getElementById("menuPageFull").style.transform = "translateX(0)";
        menuActive = true;
        document.getElementById("navigation").style.backgroundColor = " #2d2d47";
        document.getElementById("navigation").style.color = " #f4f4f4";
        document.getElementById("menuButton").innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        document.getElementById("navigation").style.boxShadow = "none";
        document.getElementById("navigation").style.borderBottom = "0.3px solid #f4f4f480";
        document.body.style.overflow = "hidden";
    }

    else {
        document.getElementById("menuPageFull").style.transform = "translateX(-100vw)";
        document.getElementById("navigation").style.backgroundColor = "  #f4f4f4";
        document.getElementById("navigation").style.color = " #111";
        document.getElementById("menuButton").innerHTML = `<i class="fa-solid fa-bars"></i>`;
        document.getElementById("navigation").style.boxShadow = " rgba(100, 100, 111, 0.073) 0px 7px 29px 0px";
        document.getElementById("navigation").style.borderBottom = "unset";
        menuActive = false;
        document.body.style.overflow = "scroll";
    }

})

function closeMenu() {
    document.getElementById("menuPageFull").style.transform = "translateX(-100vw)";
    document.getElementById("navigation").style.backgroundColor = "  #f4f4f4";
    document.getElementById("navigation").style.color = " #111";
    document.getElementById("menuButton").innerHTML = `<i class="fa-solid fa-bars"></i>`;
    document.getElementById("navigation").style.boxShadow = " rgba(100, 100, 111, 0.073) 0px 7px 29px 0px";
    document.getElementById("navigation").style.borderBottom = "unset";
    menuActive = false;
    document.body.style.overflow = "scroll";
}

function preventScrol(e) {
    e.preventDefault();
    e.stopPropagation();
}
let menuActive = false;

function menuHandler(){
    menuActive = !menuActive;
    const menuBtn = document.getElementById("menu-btn");
    const mobileNav = document.getElementById("mobile-nav");
    menuActive ? (
        menuBtn.src = "./assets/images/icon-menu-close.svg", mobileNav.style.display = "flex", menuBtn.classList.add("menu-btn-mobile")
    ) : (menuBtn.src = "./assets/images/icon-menu.svg", mobileNav.style.display = "none", menuBtn.classList.remove("menu-btn-mobile"));
}
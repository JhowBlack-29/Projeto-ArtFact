const btnMenu = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", () => {
    menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
})
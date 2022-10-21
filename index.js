window.addEventListener("DOMContentLoaded", (event)=> {
    console.log("Dom complated")
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector(".nav .list-nav");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
    })
})
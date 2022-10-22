//Asigno los eventos al boton.("cuando se haya cargado el html", añadimos los eventos)
window.addEventListener("DOMContentLoaded", (event)=> {
    // console.log("Dom complated")
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector(".nav .list-nav");
    const lista = document.getElementById("list");
    const listNav = document.querySelector(".states .open-list")

    //Añado el evento click al boton menuBtn
    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
    })

    lista.addEventListener("click", (event) => {
        lista.classList.toggle("cerrar");
        listNav.classList.toggle("visible");
    })
})

//Sobre sus listas de clases (classList) con el metodo toggle cambio su clase "salir"
//Funciona como un interruptor para el menu hamburguesa, cuando dan click para abrir o cerrar

let listElements = document.querySelectorAll('.states');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
       listElement.classList.toggle('arrow'); 

    //    let height = 0;
    //    let menu = listElement.nextElementSibling
    })
})
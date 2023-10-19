// const menu = document.querySelector('.menu');
// const modal = document.querySelector('.modal');
// const wrapper = document.querySelector('.wrapper');

// menu.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.add('modal--show');
// });

// wrapper.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.remove('modal--show');
// });



document.addEventListener('DOMContentLoaded', function () {

    const menu = document.querySelector('.modal');
    const btnmenu = document.querySelector('.menu');

    btnmenu.addEventListener("click", function () {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }

    });

    // Cierra el menú si se hace clic en cualquier parte fuera de él
    document.addEventListener("click", function (event) {
        if (event.target !== btnmenu) {
            menu.style.display = "none";
        }
    });


    // Evita que se cierre el menú al hacer clic dentro de él
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

});

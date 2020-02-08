document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
function juego(j1, j2) {

    var j1 = document.getElementById("j1").value;
    var j2 = document.getElementById("j2").value;

    if (j1 == "piedra" && j2 == "piedra") {
        window.location.href = "/dia12/empate.html";
    } else if (j1 == "tijera" && j2 == "tijera") {
        window.location.href = "/dia12/empate.html";
    } else if (j1 == "papel" && j2 == "papel") {
        window.location.href = "/dia12/empate.html";
    }
    // J1
    if (j1 == "papel" && j2 == "piedra") {
        window.location.href = "/dia12/j1.html";
    } else if (j1 == "tijera" && j2 == "papel") {
        window.location.href = "/dia12/j1.html";
    } else if (j1 == "piedra" && j2 == "tijera") {
        window.location.href = "/dia12/j1.html";
    }
    // J2
    if (j2 == "papel" && j1 == "piedra") {
        window.location.href = "/dia12/j2.html";
    } else if (j2 == "tijera" && j1 == "papel") {
        window.location.href = "/dia12/j2.html";
    } else if (j2 == "piedra" && j1 == "tijera") {
        window.location.href = "/dia12/j2.html";
    }
}
alert("Funciona");

// String
// piedra
var j1 = "papel";
var j2 = "piedra";

// empates

if(j1 == "piedra" && j2 == "piedra") {
    console.log("Empate");
} else if (j1 == "tijera" && j2 == "tijera") {
    console.log("Empate");
} else if (j1 == "papel" && j2 == "papel") {
    console.log("Empate");
}
// J1
if(j1 == "papel" && j2 == "piedra") {
    console.log("Gana J1");
} else if (j1 == "tijera" && j2 == "papel") {
    console.log("Gana J1");
} else if (j1 == "piedra" && j2 == "tijera") {
    console.log("Gana J1");
}

// J2
if(j2 == "papel" && j1 == "piedra") {
    console.log("Gana J2");
} else if (j2 == "tijera" && j1 == "papel") {
    console.log("Gana J2");
} else if (j2 == "piedra" && j1 == "tijera") {
    console.log("Gana J2");
}

function myFunction() {
    console.log("Mi funcion");
}

myFunction();

function suma(a, b) {
    console.log(a + b);
}


function sum(a, b) {
    var resultado = a + b;
    return resultado
}


// empates

function juego (j1, j2) {
    if(j1 == "piedra" && j2 == "piedra") {
        return "Empate";
    } else if (j1 == "tijera" && j2 == "tijera") {
        return "Empate";
    } else if (j1 == "papel" && j2 == "papel") {
        return "Empate";
    }

    // J1
    if(j1 == "papel" && j2 == "piedra") {
        return "Empate";
    } else if (j1 == "tijera" && j2 == "papel") {
        return "Empate";
    } else if (j1 == "piedra" && j2 == "tijera") {
        creturn "Empate";
    }
    
    // J2
    if(j2 == "papel" && j1 == "piedra") {
        return "Empate";
    } else if (j2 == "tijera" && j1 == "papel") {
        return "Empate";
    } else if (j2 == "piedra" && j1 == "tijera") {
        return "Empate";
    }
}

juego ("piedra", "papel")

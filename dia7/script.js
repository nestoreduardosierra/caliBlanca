// Imprimir numeros del 1 al 100
// Si el numero es multiplo de 3 --> Fizz
// Si el numero es multiplo de 5 --> Buzz
// Si es multiplo de 3 y 5 --> FizzBuzz
// Si no se cumple ningua condicion, imprimir el numero

// for (i = 1 <= 100; 1++) {
//     if(i % 3 == 0 && i % 5 == =) {
//     } else if (i % 3 == 0)
// }


var edad = 24;
var nombre = "Gerardo";
var llueve = false;
var habilidades = ["JS", "HTML", "CSS"];
var objeto = {
    nombre: "Cuchara",
    material: "Plastico",
    color: "Blanco",
    ciclo: 3,
    reciclable: false,
    usos: ["Comer", "Revolver", "Medir", "Morder", "Arma"], 
    
    // Metodos
    usar: function(){
        return "Utilizaste la cuchara";
    }

}
console.log(habilidades);
console.log(habilidades[1]);

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.usos[2]);
console.log(objeto.usar());

function cambia() {
    var hi = document.getElementById("nombre")
    console.log(h1.id);
}
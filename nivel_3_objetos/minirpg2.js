let jugador1 ={
nombre:"Alessandro",
vida:100,
fuerza:40,
nivel:20,
}
function aumentarVida(jugador1){
jugador1.vida +=30;
console.log("la vida de " + jugador1.nombre + "ha aumentado a " + jugador1.vida);
}
function aumentarFuerza(jugador1){
jugador1.fuerza +=20;
console.log("la fuerza de " + jugador1.nombre + " a aumentado a " + jugador1.fuerza);
}

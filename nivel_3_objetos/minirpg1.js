let jugador = {
    nombre: "Kevin",
    vida: 150,
    fuerza: 10,
    nivel: 2
        
function subirNivel(jugador) {
    jugador.nivel += 1;
    jugador.fuerza += 20;
    console.log("¡NIVEL UP! " + jugador.nombre + " ahora es nivel " + jugador.nivel);
}
function recibirDano(jugador) {
    jugador.vida -= 15;
    console.log(jugador.nombre + " recibió daño. Vida: " + jugador.vida);
}
console.log("--- INICIO DEL RPG ---");
subirNivel(jugador);
recibirDano(jugador);
console.log("Fuerza final: " + jugador.fuerza);

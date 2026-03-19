let energiakevin = 100;
let energiaAlessandro = 100;
function ataqueKevin() {
    energiaAlessandro -= 20;
    console.log("Kevin ataca. Energía de Alessandro: " + energiaAlessandro);
}
function defenderKevin() {
    console.log("Kevin se pone en guardia para reducir el próximo impacto.");
}
function recargarEnergiaKevin() {
    energiakevin += 15;
    console.log("Kevin descansa un momento. Energía actual: " + energiakevin);
}
function superAtaque() {
    energiaAlessandro -= 50;
    console.log("¡ATAQUE ESPECIAL de Kevin! El impacto es crítico. Energía Alessandro: " + energiaAlessandro);
}
function ataqueAlessandro() {
    energiakevin -= 20;
    console.log("Alessandro contraataca. Energía de Kevin: " + energiakevin);
}
function defenderAlessandro() {
    console.log("Alessandro levanta su escudo para protegerse.");
}
function recargarEnergiaAlessandro() {
    energiaAlessandro += 15;
    console.log("Alessandro recupera fuerzas. Energía actual: " + energiaAlessandro);
}

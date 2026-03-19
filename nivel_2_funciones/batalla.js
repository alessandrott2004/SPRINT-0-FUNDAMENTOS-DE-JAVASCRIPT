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

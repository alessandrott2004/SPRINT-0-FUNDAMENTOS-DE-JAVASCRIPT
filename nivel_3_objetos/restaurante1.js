let cliente = {
    nombre: "Kevin",
    dinero: 100, 
    hambre: 80  
}
function ordenarComida(cliente) {
    cliente.hambre -= 40; 
    console.log(cliente.nombre + " pidió un buen ceviche. Su hambre bajó a: " + cliente.hambre);
}
function pagar(cliente) {
    cliente.dinero -= 15; 
    console.log(cliente.nombre + " pagó la cuenta. Le quedan: " + cliente.dinero + " soles.");
}
function mostrarEstado(cliente){
console.log("El cliente " + cliente.nombre + " tiene " + cliente.hambre + " de hambre y tiene " + cliente.dinero + " de dinero");

};
mostrarEstado(cliente);
ordenarComida(cliente);
pagar(cliente);
mostrarEstado(cliente);

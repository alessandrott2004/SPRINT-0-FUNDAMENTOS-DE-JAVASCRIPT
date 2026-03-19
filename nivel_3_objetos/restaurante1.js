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

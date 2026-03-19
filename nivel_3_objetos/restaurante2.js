let cliente = { 
nombre: "Alessandro",
dinero: 100,
hambre:100
};
function ordenarComida(cliente){
cliente.hambre -= 30;
console.log("tu hambre ha sido saciada, ahora tienes " + cliente.hambre + " de hambre");
};
function pagar(cliente){
cliente.dinero -=10;
console.log("has pagado por la comida, ahora tienes "+ cliente.dinero + " de dinero");
};
function mostrarEstado(cliente){
console.log("El cliente " + cliente.nombre + " tiene " + cliente.hambre + " de hambre y tiene " + cliente.dinero + " de dinero");

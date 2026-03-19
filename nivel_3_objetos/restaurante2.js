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

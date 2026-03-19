let cliente = { 
nombre: "Alessandro",
dinero: 100,
hambre:100
};
function ordenarComida(cliente){
cliente.hambre -= 30;
console.log("tu hambre ha sido saciada, ahora tienes " + cliente.hambre + " de hambre");
};

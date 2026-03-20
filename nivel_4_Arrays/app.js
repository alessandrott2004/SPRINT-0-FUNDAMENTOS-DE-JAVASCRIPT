// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
 { nombre: "Arroz con pollo", precio: 12, stock: 5 },
 { nombre: "Lomo saltado", precio: 18, stock: 3 },
 { nombre: "Sopa", precio: 8, stock: 10 },
 { nombre: "chaufa", precio: 11, stock: 7 },
 { nombre: "causa rellena", precio: 20, stock: 4 }
];
function contarPlatos(){
 return menu.length;
}
// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
 let totalPlatos = contarPlatos();
 const output = document.getElementById("output");
 output.innerHTML = ""; // limpiar

 // crear una lista HTML simple
 let html = "<ul>";

 for (let i = 0; i < menu.length; i++) {
   const plato = menu[i];
   html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
 }

 html += "</ul>";
 html += `Hay un total de ${totalPlatos} platos`
 output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
 const nuevoPlato = { nombre: "cau cau", precio: 10, stock: 15 };
 menu.push(nuevoPlato);
}
function buscarPlatoPorNombre(nombre){
  const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  if (!plato){
    renderLista("Resultado de búsqueda", ["Texto no encontrado"]);
    return;
  }
  const texto = `${plato.nombre} - S/${plato.precio} - Stock: ${plato.stock}`;
  renderLista("Resultado de la búsqueda", [texto]);
}

// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
 agregarPlatoDemo();
 renderMenu();
});

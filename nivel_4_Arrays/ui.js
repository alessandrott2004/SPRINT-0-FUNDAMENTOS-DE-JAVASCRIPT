import { menu, contarPlatos, agregarPlatoDemo } from './menu.js';
import {
  buscarPlatoPorNombre,
  filtrarStockBajo,
  venderPlato,
  obtenerResumenMenu,
  verificarEstadoGeneral
} from './operaciones.js';

function renderMenu() {
  let totalPlatos = contarPlatos();
  const output = document.getElementById("output");
  output.innerHTML = "";

  let html = "<ul>";

  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    // Reglas de Estado del Día 5
    let clase = "normal";
    let textoExtra = "";

    if (plato.stock === 0) {
      clase = "agotado";
      textoExtra = " - AGOTADO";
    } else if (plato.stock <= 3) {
      clase = "bajo";
      textoExtra = " - Stock bajo";
    }

    html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}${textoExtra}</li>`;
  }

  html += "</ul>";
  html += `Hay un total de ${totalPlatos} platos`;
  html += `<p><strong>${verificarEstadoGeneral()}</strong></p>`;
  output.innerHTML = html;
}
function renderLista(titulo, listaDeTextos) {
  const output = document.getElementById("output");
  let html = `<h3>${titulo}</h3><ul>`;
  for (let i = 0; i < listaDeTextos.length; i++) {
    html += `<li>${listaDeTextos[i]}</li>`;
  }
  html += "</ul>";
  output.innerHTML = html;
}
export function inicializarEventos() {
  document.getElementById("btnMostrar").addEventListener("click", () => {
  renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
  const duplicado = agregarPlatoDemo();
  if (duplicado) renderMenu();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
  const valor = document.getElementById("inputBuscar").value;
  const plato = buscarPlatoPorNombre(valor);
  if (!plato) return renderLista("Resultado de búsqueda", ["Texto no encontrado"]);
  renderLista("Resultado de la búsqueda", [`${plato.nombre} - S/${plato.precio} - stock: ${plato.stock}`]);
});

document.getElementById("btnStockBajo").addEventListener("click", () => {
  const lista = filtrarStockBajo().map(p => `${p.nombre} - stock: ${p.stock}`);
  renderLista("stock bajo", lista.length ? lista : ["no hay platos con stock bajo"]);
});

document.getElementById("btnResumen").addEventListener("click", () => {
  renderLista("resumen del menu", obtenerResumenMenu());
});

document.getElementById("btnVender").addEventListener("click", () => {
  const nombre = document.getElementById("inputVenderNombre").value;
  const cantidad = Number(document.getElementById("inputVenderCantidad").value);
  venderPlato(nombre, cantidad);
});

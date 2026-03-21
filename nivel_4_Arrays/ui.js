import { menu, contarPlatos, } from './menu.js';
import {
  buscarPlatoPorNombre,
  filtrarStockBajo,
  obtenerResumenMenu,
  venderPlato,
  calcularEstadoPlato,
  verificarEstadoGeneral
} from './operaciones.js';

export function renderMenu() {
  const output = document.getElementById("output");
  let html = "<ul>";
  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    const estado = calcularEstadoPlato(plato);
    const textoExtra = estado === "agotado" ? " — AGOTADO" : estado === "bajo" ? " — Stock bajo" : "";
    html += `<li class="${estado}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}${textoExtra}</li>`;
  }
  html += "</ul>";
  html += `<p>Hay un total de ${contarPlatos()} platos</p>`;
  html += `<p><strong>${verificarEstadoGeneral()}</strong></p>`;
  output.innerHTML = html;
}

export function renderLista(titulo, listaTextos) {
  const output = document.getElementById("output");
  let html = `<h3>${titulo}</h3><ul>`;
  for (let i = 0; i < listaTextos.length; i++) {
    html += `<li>${listaTextos[i]}</li>`;
  }
  html += "</ul>";
  output.innerHTML = html;
}

export function mostrarMensaje(texto) {
  document.getElementById("output").innerHTML = `<p>${texto}</p>`;
}

export function conectarEventos() {
  document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
  });

  document.getElementById("btnAgregar").addEventListener("click", () => {
    const agregado = agregarPlato({ nombre: "cau cau", precio: 10, stock: 15 });
    if (!agregado) return renderLista("Aviso", ["Ese plato ya está en el menú"]);
    renderMenu();
  });

  document.getElementById("btnBuscar").addEventListener("click", () => {
    const nombre = document.getElementById("inputBuscar").value.trim();
    if (!nombre) return mostrarMensaje("Escribe un nombre para buscar.");
    const plato = buscarPlatoPorNombre(nombre);
    if (!plato) return renderLista("Resultado de búsqueda", ["Texto no encontrado"]);
    renderLista("Resultado de la búsqueda", [`${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}`]);
  });

  document.getElementById("btnStockBajo").addEventListener("click", () => {
    const lista = filtrarStockBajo(3).map(p => `${p.nombre} — Stock: ${p.stock}`);
    renderLista("Stock bajo (≤ 3)", lista.length ? lista : ["No hay platos con stock bajo"]);
  });

  document.getElementById("btnResumen").addEventListener("click", () => {
    renderLista("Resumen del menú", obtenerResumenMenu());
  });

  document.getElementById("btnVender").addEventListener("click", () => {
    const nombre   = document.getElementById("inputVenderNombre").value;
    const cantidad = Number(document.getElementById("inputVenderCantidad").value);
    const resultado = venderPlato(nombre, cantidad);
    renderLista(resultado.ok ? "Venta exitosa" : "Aviso", [resultado.mensaje]);
    if (resultado.ok) renderMenu();
  });
}

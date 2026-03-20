import { menu } from './menu.js';

export function buscarPlatoPorNombre(nombre) {
  const plato = menu.find(p =>
    p.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (!plato) {
    renderLista("Resultado de busqueda es:", ["texto no encontrado"]);
    return;
  }

  const texto = `${plato.nombre} - S/${plato.precio} - stock: ${plato.stock}`;
  renderLista("Resultado de la busqueda", [texto]);
}

export function filtrarStockBajo() {
  const platosfiltrados = menu.filter(p => p.stock <= 3);
  if (platosfiltrados.length === 0) {
    renderLista("stock bajo", ["no hay platos con stock bajo"]);
    return;
  }
  const listaDeTextos = platosfiltrados.map(p =>
    `${p.nombre} - stock: ${p.stock}`
  );
  renderLista("stock bajo", listaDeTextos);
}


export function venderPlato(nombre, cantidad) {
  const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  if (!plato) {
    renderLista("Aviso", ["Plato no encontrado"]);
    return;
  }
  // Regla 2 — NUEVO
  if (plato.stock === 0) {
    renderLista("Aviso", ["No disponible"]);
    return;
  }
  if (plato.stock < cantidad) {
    renderLista("Aviso", [`Stock insuficiente. El stock actual de ${plato.nombre}: ${plato.stock}`]);
    return;
  }

  plato.stock -= cantidad;
  renderLista("Venta exitosa", [`Se vendieron ${cantidad} x ${plato.nombre}. Stock restante: ${plato.stock}`]);
  renderMenu();
}

export function verificarEstadoGeneral() {
  let agotados = 0;
  let bajos = 0;

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].stock === 0) {
      agotados++;
    } else if (menu[i].stock <= 3) {
      bajos++;
    }
  }

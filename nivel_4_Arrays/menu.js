export let menu = [
  { nombre: "Arroz con pollo", precio: 12, stock: 5 },
  { nombre: "Lomo saltado",    precio: 18, stock: 7 },
  { nombre: "Sopa",            precio: 8,  stock: 10 },
  { nombre: "chaufa",          precio: 11, stock: 7 },
  { nombre: "causa rellena",   precio: 20, stock: 4 }
];

export function contarPlatos() {
  return menu.length;
}

export function agregarPlato(plato) {
  const duplicado = menu.some(p => p.nombre.toLowerCase() === plato.nombre.toLowerCase());
  if (duplicado) return false;
  menu.push(plato);
  return true;
}

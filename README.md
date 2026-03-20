estructura del proyecto
 menu.js
Solo contiene:
Array menu


Función para obtener menú


Función para modificar menú (agregar, actualizar stock)


No debe tener código HTML.

operaciones.js
Solo contiene lógica de negocio:
venderPlato


verificarEstadoGeneral


buscarPlato


filtrarStockBajo


cualquier regla


No debe tocar directamente el DOM.

 ui.js
Solo contiene:
renderMenu


renderLista


mostrarMensajes


Conexión con botones


Es el único archivo que toca document.getElementById.

main.js
Es el punto de inicio.
Importa los demás archivos.


Inicializa el sistema.


Conecta todo.



// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <nav class="menu">
      <ul class="menu-level1">
        <li class="menu-item">
          <span>Registro de personas ▾</span>
          <ul class="menu-level2">
            <li><a href="registro.html">Registro</a></li>
            <li><a href="consulta.html">Consulta</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="saludo.html">Bienvenidos</a>
        </li>
      </ul>
    </nav>
  `;

  const container = document.getElementById("menu-container");
  if (container) {
    container.innerHTML = menuHTML;
  }
});

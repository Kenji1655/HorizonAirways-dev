var abrirSidebar = false;
var sidebar = document.getElementById("sidebar");

function abrirSidebar() {
  if (abrirSidebar) {
    sidebar.classList.add("sidebar-responsive");
    abrirSidebar = true;
  }
}

function fecharSidebar() {}

function abrirPagina(pagina) {
  window.location.href = pagina;
}

// Event listeners para os itens da sidebar
document
  .getElementById("aeronaves-sidebar")
  .addEventListener("click", function () {
    abrirPagina("aeronaves.html");
  });

document
  .getElementById("aeroportos-sidebar")
  .addEventListener("click", function () {
    abrirPagina("aeroportos.html");
  });

document.getElementById("voos-sidebar").addEventListener("click", function () {
  abrirPagina("voos.html");
});



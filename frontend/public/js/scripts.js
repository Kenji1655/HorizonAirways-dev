var abrirSidebar = false;
var sidebar = document.getElementById("sidebar");

function abrirSidebar() {
    if(!abrirSidebar) {
        sidebar.classList.add("sidebar-responsive")
        abrirSidebar = true;
    }
}

function fecharSidebar(){
    if(abrirSidebar) {
        sidebar.classList.remove("sidebar-responsive");
        abrirSidebar = false;
    }
}
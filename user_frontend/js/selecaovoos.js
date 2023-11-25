// Funcao para ir para home

document.addEventListener("DOMContentLoaded", function () {
    // Aguarde até que o documento esteja totalmente carregado
  
    // Obtenha o elemento de login
    var homeLink = document.getElementById("homeLink");
  
    // Adicione um ouvinte de evento de clique
    homeLink.addEventListener("click", function (event) {
      // Impedir o comportamento padrão de navegação
      event.preventDefault();
  
      // Redirecionar para a página de login
      window.location.href = "/user_frontend/home.html";
    });
  });




  document.addEventListener("DOMContentLoaded", function () {

  function obterParametro(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtém o valor do campo da URL
var campoRecebido = obterParametro("vooOrigem");

if (origem) {
    document.getElementById("origem").innerText = campoRecebido;
}
  });
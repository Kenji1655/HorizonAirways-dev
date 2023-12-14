// Funçao para abrir Home
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde até que o documento esteja totalmente carregado
    // Obtenha o elemento de login
    var HomeLink = document.getElementById("HomeLink");
    // Adicione um ouvinte de evento de clique
    HomeLink.addEventListener("click", function (event) {
      // Impedir o comportamento padrão de navegação
      event.preventDefault();
      // Redirecionar para a página de login
      window.location.href = "/frontend/home.html";
    });
  });

  function obterParametro(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Obter os dados do localStorage
    var assentoIda = localStorage.getItem("assentoIda");
    var assentoVolta = localStorage.getItem("assentoVolta");
    var nomeTitular = localStorage.getItem("nomeTitular");
    var nomePix = localStorage.getItem("nomePix");
    
  
    // Atualizar os elementos na barra de informações
    document.getElementById("assentoInfoIda").textContent = assentoIda;
    document.getElementById("assentoInfoVolta").textContent = assentoVolta;
    document.getElementById("passageiroInfo").textContent = nomeTitular;
    document.getElementById("passageiroInfo").textContent = nomePix;
    
  
  });

  
// Funcao para ir para home

document.addEventListener("DOMContentLoaded", function () {
  // Aguarde até que o documento esteja totalmente carregado
  // Obtenha o elemento de home
  var homeLink = document.getElementById("homeLink");
  // Adicione um ouvinte de evento de clique
  homeLink.addEventListener("click", function (event) {
    // Impedir o comportamento padrão de navegação
    event.preventDefault();
    // Redirecionar para a página home
    window.location.href = "/user_frontend/home.html";
  });
});

// Função para obter parâmetros de consulta da URL
function obterParametro(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", function () {
  // Aguarde até que o documento esteja totalmente carregado
  // Obtenha o elemento de login 
  var assentos = document.getElementById("btnAssentos");
  // Adicione um ouvinte de evento de clique
  assentos.addEventListener("click", function (event) {
    // Impedir o comportamento padrão de navegação
    event.preventDefault();
    // Redirecionar para a página de login
    window.location.href = "/user_frontend/mapaAssentos.html";
  });
});


// FUNÇAO PARA RECEBER VALORES DA PAGINA HOME
document.addEventListener("DOMContentLoaded", function () {
  // Obter os dados do localStorage
  var origem = localStorage.getItem("origem");
  var destino = localStorage.getItem("destino");
  var dataIda = localStorage.getItem("dataIda");
  var dataVolta = localStorage.getItem("dataVolta");
  var quantidadePassageiros = localStorage.getItem("quantidadePassageiros");

  // Atualizar os elementos na barra de informações
  document.getElementById("vooIdaInfo").textContent = "Origem: " + origem;
  document.getElementById("vooVoltaInfo").textContent = "Destino: " + destino;
  document.getElementById("dataInfo").textContent = "Data Ida: " + dataIda + " - Data Volta: " + dataVolta;
  document.getElementById("passageirosInfo").textContent = "Quantidade de Passageiros: " + quantidadePassageiros;

  // Limpar os dados do localStorage após usar
  localStorage.removeItem("origem");
  localStorage.removeItem("destino");
  localStorage.removeItem("dataIda");
  localStorage.removeItem("dataVolta");
  localStorage.removeItem("quantidadePassageiros");
});
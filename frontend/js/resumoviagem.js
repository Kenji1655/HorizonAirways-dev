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
    window.location.href = "/frontend/home.html";
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
    window.location.href = "/frontend/selecaoassento.html";
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
  var tipo_viagem = localStorage.getItem("tipo_viagem");

  // Atualizar os elementos na barra de informações
  document.getElementById("vooIdaInfo").textContent = "Origem: " + origem;
  document.getElementById("vooVoltaInfo").textContent = "Destino: " + destino;
  document.getElementById("dataInfo").textContent = "Data Ida: " + dataIda + " - Data Volta: " + dataVolta;
  document.getElementById("passageirosInfo").textContent = "Quantidade de Passageiros: " + quantidadePassageiros;

  // Chamar funcao para ocultar container
  apareceContainer(tipo_viagem);

  // Limpar os dados do localStorage após usar
  localStorage.removeItem("origem");
  localStorage.removeItem("destino");
  localStorage.removeItem("dataIda");
  localStorage.removeItem("dataVolta");
  localStorage.removeItem("quantidadePassageiros");
});


// Função para controlar a exibição do container de volta com base no tipo de viagem
function apareceContainer(tipo_viagem) {
  // Verifica se o tipo de viagem é "ida"
  if (tipo_viagem === "ida") {
    // Encontra o elemento HTML com a classe "container_volta"
    var containerVolta = document.querySelector(".container_volta");

    // Verifica se o elemento foi encontrado
    if (containerVolta) {
      // Oculta o elemento configurando o estilo de exibição para "none"
      containerVolta.style.display = "none";
    }
  }
}
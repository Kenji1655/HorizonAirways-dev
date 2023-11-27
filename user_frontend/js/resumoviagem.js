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
    window.location.href = "/HorizonAirways-dev/user_frontend/home.html";
  });
});

// Função para obter parâmetros de consulta da URL
function obterParametro(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Função para exibir informações na barra
function exibirInformacoes() {
  var vooIda = obterParametro("tipoViagem") === "ida";
  var vooVolta = obterParametro("tipoViagem") === "ida-volta";
  var dataIda = obterParametro("dataIda");
  var dataVolta = obterParametro("dataVolta");
  var adultos = obterParametro("adultos");
  var criancas = obterParametro("criancas");
  // Exibir informações de voo de ida
  document.getElementById("vooIdaInfo").innerText = vooIda
    ? "Voo de ida selecionado"
    : "";
  // Exibir informações de voo de volta
  document.getElementById("vooVoltaInfo").innerText = vooVolta
    ? "Voo de volta selecionado"
    : "";
  // Exibir data selecionada
  document.getElementById("dataInfo").innerText =
    "Data selecionada: " + (vooVolta ? dataIda + " - " + dataVolta : dataIda);
  // Exibir quantidade de passageiros
  document.getElementById("passageirosInfo").innerText =
    "Quantidade de passageiros: " +
    adultos +
    " adultos, " +
    criancas +
    " crianças";
}

// Chamar a função para exibir informações ao carregar a página
exibirInformacoes();

document.getElementById("cardLink").addEventListener("click", function () {
  redirectPage("/user_frontend/login.html");
});

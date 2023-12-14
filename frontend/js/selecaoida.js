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

// FETCH BUSCAR VOO
function fetchBuscarVoo({ origem: origem, destino: destino, dataIda: dataIda }) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ origem , destino, dataIda })
  };
  return fetch('http://localhost:3000/buscarVoo', requestOptions).then(T => T.json());
}

// FUNÇAO PARA RECEBER VALORES DA PAGINA HOME
document.addEventListener("DOMContentLoaded", function () {
  // Obter os dados do localStorage
  var origem = localStorage.getItem("origem");
  console.log("origemmm: ", origem)
  var destino = localStorage.getItem("destino");
  console.log("destino: ", destino)
  var dataIda = localStorage.getItem("dataIda");
  console.log("dataIda: ", dataIda)
  var dataVolta = localStorage.getItem("dataVolta");
  var quantidadePassageiros = localStorage.getItem("quantidadePassageiros");
  var tipo_viagem = localStorage.getItem("tipo_viagem");
  console.log("tipo da viagem: ",tipo_viagem);

  // Atualizar os elementos na barra de informações
  document.getElementById("vooIdaInfo").textContent = "Origem: " + origem;
  document.getElementById("vooVoltaInfo").textContent = "Destino: " + destino;
  document.getElementById("dataInfo").textContent = "Data Ida: " + dataIda + " - Data Volta: " + dataVolta;
  document.getElementById("passageirosInfo").textContent = "Quantidade de Passageiros: " + quantidadePassageiros;

  fetchBuscarVoo({ origem, destino, dataIda });
});



function ondeVai(){
  // if tipo_viagem == ida, vai pra resumoviagem.html ( esconder container de4 baixo)
  // se nao, vai pra selecaovolta --- tem que mostrar no resumo o container 2
  var tipo_da_viagem = localStorage.getItem("tipo_viagem");
  if(tipo_da_viagem == "ida"){
    window.location.href = "/frontend/resumoviagem.html";
    }
  else {
    window.location.href = "/frontend/selecaovolta.html";
  }

}
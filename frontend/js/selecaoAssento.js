function selecionarAssento() {
    const assentosSelect = document.getElementById('assentosSelect');
    const assentoSelecionado = assentosSelect.value;

    if (assentoSelecionado) {
      alert(`Assento ${assentoSelecionado} selecionado!`);
    }
  }

  function obterParametro(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // FUNCAO PARA ENVIAR DADOS DO FORMS PARA OUTRA PAGINA
  function enviarCampo() {
    // Seu código para obter os valores do formulário
    var assentoIda = document.getElementById("assentoIda").value;
    var assentoVolta = document.getElementById("assentoVolta").value;
    // Armazenar os dados no localStorage
    localStorage.setItem("assentoIda", assentoIda);
    localStorage.setItem("assentoVolta", assentoVolta);
  }


  document.addEventListener("DOMContentLoaded", function () {
    function enviarCampo() {
      var assentoIda = document.getElementById("assentoIda").value;
      var assentoVolta = document.getElementById("assentoVolta").value;

      var tipo_viagem = localStorage.getItem("tipo_viagem");
      apareceContainer(tipo_viagem);

     
  
      var camposPreenchidos =
        assentoIda !== "" &&
        assentoVolta !== "";
  
      if (!camposPreenchidos) {
        alert("Por favor, preencha todos os campos obrigatórios.");
      } else {
        window.location.href = "/frontend/pagamento.html";
      }
    }
  
    document
      .getElementById("confirmarAssento")
      .addEventListener("click", function (event) {
        event.preventDefault();
        enviarCampo();
      });
  });

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
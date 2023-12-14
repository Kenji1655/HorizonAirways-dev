// Inicialização do Tooltip
document.addEventListener("DOMContentLoaded", function () {
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
});

// Desabilitar funcionalidade do link
document.addEventListener("DOMContentLoaded", function () {
var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener('click', function(e) {
    e.preventDefault();
});
});


// FUNCAO PARA BLOQUEAR FORMULARIO CARTAO CASO NAO SEJA PREENCHIDO
document.addEventListener("DOMContentLoaded", function () {
    function enviarCampo() {
        var nomeTitular = document.getElementById("nomeTitular").value;
        var numeroCartao = document.getElementById("numeroCartao").value;
        var dataExpiracao = document.getElementById("dataExpiracao").value;
        var CVV = document.getElementById("CVV").value;
       
    var camposPreenchidos =
      nomeTitular !== "" &&
      numeroCartao !== "" &&
      dataExpiracao !== "" &&
      CVV !== "";

    if (!camposPreenchidos) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      window.location.href = "/frontend/ticket.html";
    }
  }

  document
    .getElementById("confirmarPag")
    .addEventListener("click", function (event) {
      event.preventDefault();
      enviarCampo();
    });
});



// FUNCAO PARA BLOQUEAR FORMULARIO PIX CASO NAO SEJA PREENCHIDO
document.addEventListener("DOMContentLoaded", function () {
    function enviarCampo() {
        var nomePix = document.getElementById("nomePix").value;
        var numeroCpf = document.getElementById("numeroCpf").value;
       
        var camposPreenchidos =
      nomePix !== "" &&
      numeroCpf !== "";

    if (!camposPreenchidos) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      window.location.href = "/frontend/ticket.html";
    }
  }

  document
    .getElementById("confirmarPix")
    .addEventListener("click", function (event) {
      event.preventDefault();
      enviarCampo();
    });
});

 // FUNCAO PARA ENVIAR DADOS DO FORMS PARA OUTRA PAGINA
  function enviarCampo() {
  // Seu código para obter os valores do formulário
  var nomeTitular = document.getElementById("nomeTitular").value;
  var nomePix = document.getElementById("nomePix").value;
  // Armazenar os dados no localStorage
  localStorage.setItem("nomeTitular", nomeTitular);
  localStorage.setItem("nomePix", nomePix);
}
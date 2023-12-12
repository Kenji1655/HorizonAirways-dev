// Função que habilita ou desabilita o campo de data de ida com base na escolha do tipo de viagem
function toggleData() {
  // Obtenção dos elementos do DOM
  var tipoViagem = document.getElementById("tipo-viagem");
  var dataIdaInput = document.getElementById("data-ida-container");
  var dataVoltaInput = document.getElementById("data-volta-container");
  // Condição para verificar o tipo de viagem escolhido
  if (tipoViagem.value === "ida") {
    // Exibição dos campos de data de ida e volta
    dataIdaInput.style.display = "block";
    dataVoltaInput.style.display = "block";
    // Configuração dos campos de data
    dataIdaInput.querySelector("input").readOnly = false;
    dataVoltaInput.querySelector("input").readOnly = true;
    dataVoltaInput.querySelector("input").classList.add("data-volta-input");
  } else if (tipoViagem.value === "ida-volta") {
    // Exibição dos campos de data de ida e volta
    dataIdaInput.style.display = "block";
    dataVoltaInput.style.display = "block";
    // Configuração dos campos de data
    dataIdaInput.querySelector("input").readOnly = false;
    dataVoltaInput.querySelector("input").readOnly = false;
    dataVoltaInput.querySelector("input").classList.remove("data-volta-input");
  }
}

// Evento que chama a função toggleData quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function () {
  toggleData();
});

// Evento que adiciona a classe 'active' ao link de navegação clicado
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const currentActiveLink = document.querySelector(".nav-link.active");
      if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
      }
      navLink.classList.add("active");
    });
  });
});

// Evento que permite a navegação suave ao clicar nos links da barra de navegação
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a.nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Obtém o ID do elemento de destino
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      // Realiza a rolagem suave para o elemento de destino
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Evento que altera a aparência da barra de navegação ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
  const navEL = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY >= 56;
    navEL.classList.toggle("navbar-scrolled", scrolled);
  });
});

// Funçao para abrir tela de login
document.addEventListener("DOMContentLoaded", function () {
  // Aguarde até que o documento esteja totalmente carregado
  // Obtenha o elemento de login
  var loginLink = document.getElementById("loginLink");
  // Adicione um ouvinte de evento de clique
  loginLink.addEventListener("click", function (event) {
    // Impedir o comportamento padrão de navegação
    event.preventDefault();
    // Redirecionar para a página de login
    window.location.href = "/frontend/login.html";
  });
});

// FUNCAO PARA AUTOCOMPLEMENTAR A BUSCA
document.addEventListener("DOMContentLoaded", function () {
  $(function () {
    fetch("http://localhost:3000/listarCidades")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        var availableTags = [];
        data.sort();
        for (i in data) {
          availableTags.push(`${data[i][0]}-${data[i][1]}, ${data[i][2]}`);
        }
        $("#origem").autocomplete({
          source: availableTags,
        });
        $("#destino").autocomplete({
          source: availableTags,
        });
      })
      .catch((error) => {
        console.error("Erro ao recuperar dados da API:", error);
      });
  });
});

// FUNCAO PARA BLOQUEAR FORMULARIO CASO NAO SEJA PREENCHIDO
document.addEventListener("DOMContentLoaded", function () {
  function enviarCampo() {
    var tipoViagem = document.getElementById("tipo-viagem").value;
    var origem = document.getElementById("origem").value;
    var destino = document.getElementById("destino").value;
    var dataIda = document.getElementById("data-ida").value;
    var dataVolta = document.getElementById("data-volta").value;
    var adultos = document.getElementById("adultos").value;

    var camposPreenchidos =
      tipoViagem !== "" &&
      origem !== "" &&
      destino !== "" &&
      dataIda !== "" &&
      (tipoViagem === "ida" || dataVolta !== "") &&
      adultos !== "";

    if (!camposPreenchidos) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      window.location.href = "/frontend/selecaoida.html";
    }
  }

  document
    .getElementById("btnProcurar")
    .addEventListener("click", function (event) {
      event.preventDefault();
      enviarCampo();
    });
});




// FUNCAO PARA ENVIAR DADOS DO FORMS PARA OUTRA PAGINA
  function enviarCampo() {
    // Seu código para obter os valores do formulário
    var origem = document.getElementById("origem").value;
    var destino = document.getElementById("destino").value;
    var dataIda = document.getElementById("data-ida").value;
    var dataVolta = document.getElementById("data-volta").value;
    var quantidadePassageiros = document.getElementById("adultos").value;
  
    // Armazenar os dados no localStorage
    localStorage.setItem("origem", origem);
    localStorage.setItem("destino", destino);
    localStorage.setItem("dataIda", dataIda);
    localStorage.setItem("dataVolta", dataVolta);
    localStorage.setItem("quantidadePassageiros", quantidadePassageiros);
  
    // Redirecionar para a página de seleção de voos
    window.location.href = "/frontend/selecaoida.html";
  }
  
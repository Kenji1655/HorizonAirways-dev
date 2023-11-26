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

// home.js

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
document.addEventListener('DOMContentLoaded', function () {
  const navEL = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY >= 56;
    navEL.classList.toggle('navbar-scrolled', scrolled);
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
    window.location.href = "/user_frontend/login.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Aguarde até que o documento esteja totalmente carregado

  // Obtenha o elemento de login
  var btnProcurar = document.getElementById("btnProcurar");

  // Adicione um ouvinte de evento de clique
  btnProcurar.addEventListener("click", function (event) {
    // Impedir o comportamento padrão de navegação
    event.preventDefault();

    // Redirecionar para a página de login
    window.location.href = "/user_frontend/selecaovoos.html";
  });
});


// FUNCAO PARA AUTOCOMPLEMENTAR A BUSCA

document.addEventListener("DOMContentLoaded", function () { 

  $(function() {

    fetch('http://localhost:3000/listarCidades')
      .then(response => {
        if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        var availableTags = []
        data.sort();
        for(i in data){
            availableTags.push(data[i].join('-'));
            console.log(data[i].join('-'));
        }
        $("#origem").autocomplete({
          source: availableTags
        });
        $("#destino").autocomplete({
          source: availableTags
        });
      })
      .catch(error => {
        console.error('Erro ao recuperar dados da API:', error);
      });
  });
});

// FUNCAO PARA ENVIAR DESTINO E ORIGEM SELECIONADOS
function enviarCampo() {
  var vooOrigem = document.getElementById("origem").value;
  window.location.href = "selecaovoos.html?vooOrigem=" + encodeURIComponent(vooOrigem);
}

// FUNCAO PARA VER SENHA
function togglePassword() {
  var senhaInput = document.getElementById("senhaInput");
  var eyeIcon = document.getElementById("eyeIcon");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    senhaInput.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}

// FUNCAO PARA IR AO DASHBOARD ADM
document.addEventListener("DOMContentLoaded", function () {
  // Aguarde até que o documento esteja totalmente carregado
  // Obtenha o elemento de login
  var btnLogin = document.getElementById("btnLogin");
  // Adicione um ouvinte de evento de clique
  btnLogin.addEventListener("click", function (event) {
    // Impedir o comportamento padrão de navegação
    event.preventDefault();
    // Redirecionar para a página de login
    window.location.href = "/HorizonAirways-dev/admin_frontend/dashboard.html";
  });
});

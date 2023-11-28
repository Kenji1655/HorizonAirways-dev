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
  function enviarCampo() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var camposPreenchidos = email !== "" && senha !== "";

    if (!camposPreenchidos) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      window.location.href = "/admin_frontend/dashboard.html";
    }
  }

  document
    .getElementById("btnLogin")
    .addEventListener("click", function (event) {
      event.preventDefault();
      enviarCampo();
    });
});

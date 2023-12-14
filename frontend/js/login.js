// FUNCAO PARA VER SENHA
function togglePassword() {
  var senhaInput = document.getElementById("senhaInput");
  var eyeIcon = document.getElementById("eyeIcon");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  } else {
    senhaInput.type = "password";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
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
      var login_adm = document.getElementById('admin');
      if(login_adm.checked){
        window.location.href = 'admin.html'
      }else{
        window.location.href = 'home.html'
      }
    }
  }

  document
    .getElementById("btnLogin")
    .addEventListener("click", function (event) {
      event.preventDefault();
      enviarCampo();
    });
});

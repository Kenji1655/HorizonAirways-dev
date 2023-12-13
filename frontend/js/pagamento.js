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
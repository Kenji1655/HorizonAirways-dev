function togglePassword() {
    var senhaInput = document.getElementById('senhaInput');
    var eyeIcon = document.getElementById('eyeIcon');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        senhaInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}
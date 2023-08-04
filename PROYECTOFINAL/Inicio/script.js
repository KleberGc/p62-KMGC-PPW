document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registro-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const cedula = document.getElementById('cedula').value;
        const usuario = document.getElementById('usuario').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí puedes agregar código para enviar los datos a un servidor, validarlos, etc.
        // Por simplicidad, este ejemplo solo muestra un mensaje de éxito en una animación.

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Registro exitoso';

        form.parentNode.insertBefore(successMessage, form.nextSibling);

        setTimeout(function() {
            successMessage.remove();
        }, 3000);
    });
});

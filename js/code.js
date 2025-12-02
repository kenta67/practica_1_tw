const imageUpload = document.getElementById('image-upload');
const profileImage = document.getElementById('profile-image');

// Función para cambiar la imagen
imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
    // Verificar que sea una imagen
    if (!file.type.match('image.*')) {
        alert('Por favor, selecciona un archivo de imagen (JPG, PNG, etc.)');
        return;
    }
    
    // Verificar tamaño (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('La imagen es demasiado grande. Máximo 5MB');
        return;
    }
    
    // Crear un lector de archivos
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Actualizar la imagen de perfil
        profileImage.src = e.target.result;
        
        // Guardar en localStorage para persistencia
        localStorage.setItem('profileImage', e.target.result);
        
        // Mostrar mensaje de éxito
        alert('Imagen cambiada correctamente');
    };
    
    reader.onerror = function() {
        alert('Error al cargar la imagen');
    };
    
    reader.readAsDataURL(file);
    }
});
// Cargar imagen guardada al iniciar (si existe)
window.addEventListener('DOMContentLoaded', function() {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
    profileImage.src = savedImage;
    }
});
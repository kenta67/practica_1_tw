    const imageUpload = document.getElementById('image-upload');
    const profileImage = document.getElementById('profile-image');
    
    const originalImageSrc = profileImage.src;
    
    imageUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      
      if (file) {
        if (!file.type.match('image.*')) {
          alert('Por favor, selecciona un archivo de imagen (JPG, PNG, etc.)');
          return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
          alert('La imagen es demasiado grande. Máximo 5MB');
          return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
          profileImage.src = e.target.result;
          
          localStorage.setItem('profileImage', e.target.result);
          
          alert('Imagen cambiada correctamente');
        };
        
        reader.onerror = function() {
          alert('Error al cargar la imagen');
        };
        
        reader.readAsDataURL(file);
      }
    });
    
    profileImage.addEventListener('dblclick', function() {
      if (confirm('¿Restaurar la imagen original?')) {
        profileImage.src = originalImageSrc;
        localStorage.removeItem('profileImage');
        imageUpload.value = '';
        alert('Imagen restaurada');
      }
    });
    
    window.addEventListener('DOMContentLoaded', function() {
      const savedImage = localStorage.getItem('profileImage');
      if (savedImage) {
        profileImage.src = savedImage;
      }
    });
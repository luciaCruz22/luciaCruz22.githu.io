
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.gallery-grid img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeLightbox = document.getElementById('close-lightbox');

        images.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src; // Usa la misma imagen
                lightbox.classList.add('visible');
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('visible');
        });

        // Cierra el lightbox al hacer clic fuera de la imagen
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('visible');
            }
        });
    });


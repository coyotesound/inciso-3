let currentIndex = 0;
const images = document.querySelectorAll("#carousel img");
const totalImages = images.length;

// Función para mover el carrusel a la imagen siguiente
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Función para mover el carrusel a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Función para actualizar la vista del carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector("#carousel").style.transform = `translateX(${offset}%)`;
}

// Controlar el carrusel automáticamente cada 30 segundos
setInterval(nextImage, 30000);

// Controlar los botones de navegación
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// Controlar la navegación con el teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextImage();
    } else if (e.key === "ArrowLeft") {
        prevImage();
    }
});

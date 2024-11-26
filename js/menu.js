// Lightbox for showing off the dishes
// Get all gallery images and the modal image element
const galleryImages = document.querySelectorAll('.gallery-image');
const lightboxImage = document.querySelector('#lightboxImage');
const imageHeader = document.querySelector('#dish-name');

// Add event listeners to each image in the gallery
galleryImages.forEach(image => {
    let dishName = image.closest('.card').querySelector('.card-header');
    image.addEventListener('click', () => {
        
        // Set the src of the lightbox image to the clicked image's src
        lightboxImage.src = image.src;
        imageHeader.innerHTML = dishName.textContent;
    });
});

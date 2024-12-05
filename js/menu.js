// Lightbox for showing off the dishes
const galleryItems = document.querySelectorAll(".gallery-image, .view");
const lightboxImage = document.querySelector("#lightboxImage");
const imageHeader = document.querySelector("#dish-name");

// Function to set up the lightbox
const showLightbox = (element) => {
  const card = element.closest(".card");
  console.log(element.closest(".card"));
  const dishName = card.querySelector(".card-header").textContent;
  const imageSrc = card.querySelector(".gallery-image").src;
  const imageAlt = card.querySelector(".gallery-image").alt;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  imageHeader.innerHTML = dishName;
};

// Add event listeners to all gallery items
galleryItems.forEach((item) => {
  item.addEventListener("click", () => showLightbox(item));
});

const lightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxCounter = document.getElementById("lightboxCounter");

let currentIndex = 0;

function updateLightbox() {

    const photo = galleryImages[currentIndex];

    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title;

    lightboxTitle.textContent = photo.title;
    lightboxDescription.textContent = photo.description;
    lightboxCounter.textContent =
        `${currentIndex + 1} / ${galleryImages.length}`;

}

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeGallery() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

}

document.addEventListener("click", (e) => {

    const card = e.target.closest(".gallery-card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const index = galleryImages.findIndex(photo => photo.id === id);

    if (index !== -1) {

        openLightbox(index);

    }

});

nextImage.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    updateLightbox();

});

prevImage.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    updateLightbox();

});

closeLightbox.addEventListener("click", closeGallery);

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeGallery();

    }

});

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    switch (e.key) {

        case "Escape":
            closeGallery();
            break;

        case "ArrowRight":
            nextImage.click();
            break;

        case "ArrowLeft":
            prevImage.click();
            break;

    }

});
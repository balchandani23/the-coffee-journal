const galleryGrid = document.querySelector(".gallery-grid");
const viewMoreBtn = document.getElementById("viewMoreBtn");

let visibleImages = 6;

const featuredClasses = [
    "hero-image",
    "portrait-image portrait-one",
    "square-image square-one",
    "square-image square-two",
    "wide-image",
    "portrait-image portrait-two"
];

function createFeaturedGallery() {

    let html = `<div class="featured-gallery">`;

    galleryImages.slice(0, 6).forEach((photo, index) => {

        html += `

        <div class="gallery-card ${featuredClasses[index]}" data-id="${photo.id}">

            <img src="${photo.image}" alt="${photo.title}">

            <div class="gallery-overlay">
                <span>+</span>
            </div>

        </div>

        `;

    });

    html += `</div>`;

    return html;

}

function createNormalGallery() {

    if (visibleImages <= 6) return "";

    let html = `<div class="more-gallery">`;

    galleryImages
        .slice(6, visibleImages)
        .forEach(photo => {

            html += `

            <div class="gallery-card normal-card" data-id="${photo.id}">

                <img src="${photo.image}" alt="${photo.title}">

                <div class="gallery-overlay">
                    <span>+</span>
                </div>

            </div>

            `;

        });

    html += `</div>`;

    return html;

}

function renderGallery() {

    galleryGrid.innerHTML = "";

    galleryGrid.innerHTML =
        createFeaturedGallery() +
        createNormalGallery();

    if (galleryImages.length <= 6) {

        viewMoreBtn.style.display = "none";
        return;

    }

    if (visibleImages >= galleryImages.length) {

        viewMoreBtn.textContent = "View Less";

    } else {

        viewMoreBtn.textContent = "View More";

    }

}

viewMoreBtn.addEventListener("click", () => {

    if (visibleImages >= galleryImages.length) {

        visibleImages = 6;

        renderGallery();

        document.getElementById("gallery").scrollIntoView({
            behavior: "smooth"
        });

        return;

    }

    visibleImages += 6;

    if (visibleImages > galleryImages.length) {

        visibleImages = galleryImages.length;

    }

    renderGallery();

});

renderGallery();
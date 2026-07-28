console.log("PASSPORT JS LOADED");
const passportGrid = document.getElementById("passportGrid");

// COLLECTION TEXT
const collectionText = document.getElementById("collectionText");
collectionText.innerHTML = `
Thirty-Three Coffees Explored.<br>
<span>The Journey Continues.</span>
`;

passportGrid.innerHTML = coffeeData.map(coffee => `

<article
class="passport-card"

data-id="${coffee.id}"
data-name="${coffee.name}"
data-roaster="${coffee.roaster}"
data-origin="${coffee.origin}"
data-process="${coffee.process}"
data-brew="${coffee.brew}"
data-roast="${coffee.roast}"
data-rating="${coffee.rating}"
data-date="${coffee.date}"
data-review-title="${coffee.reviewTitle}"
data-review="${coffee.review}">



<div class="passport-header">

<div class="passport-stamp">

<span class="stamp-top">SPECIALITY</span>

<strong>TCJ</strong>

<strong>APPROVED</strong>

<span class="stamp-bottom">COFFEE</span>

</div>

<div class="passport-content">

<span class="passport-id">${coffee.id}</span>

<h3>${coffee.name}</h3>

<div class="passport-line"></div>

<p>${coffee.roaster}</p>

</div>

</div>

<div class="passport-footer">

<div>

<small>ORIGIN</small>

<strong>${coffee.origin}</strong>

</div>

<div>

<small>BREW</small>

<strong>${coffee.brew}</strong>

</div>

<div>

<small>RATING</small>

<strong>${coffee.rating}</strong>

</div>

</div>

</article>
`).join("");

const cards = [...document.querySelectorAll(".passport-card")];

const modal = document.querySelector(".passport-modal");
const closeBtn = document.querySelector(".passport-close");

const modalId = document.getElementById("modal-id");
const modalName = document.getElementById("modal-name");
const modalRoaster = document.getElementById("modal-roaster");
const modalReviewTitle = document.getElementById("modal-review-title");
const modalReview = document.getElementById("modal-review");
const modalOrigin = document.getElementById("modal-origin");
const modalProcess = document.getElementById("modal-process");
const modalBrew = document.getElementById("modal-brew");
const modalRoast = document.getElementById("modal-roast");
const modalDate = document.getElementById("modal-date");
const modalRating = document.getElementById("modal-rating");

cards.forEach(card => {

    card.addEventListener("click", () => {

        modalId.textContent = card.dataset.id;
        modalName.textContent = card.dataset.name;
        modalRoaster.textContent = card.dataset.roaster;
        modalReviewTitle.textContent = card.dataset.reviewTitle;
        modalReview.textContent = card.dataset.review;

        modalOrigin.textContent = card.dataset.origin;
        modalProcess.textContent = card.dataset.process;
        modalBrew.textContent = card.dataset.brew;
        modalRoast.textContent = card.dataset.roast;
        modalDate.textContent = card.dataset.date;
        modalRating.textContent = card.dataset.rating;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});

function closeModal(){

    modal.classList.remove("active");
    document.body.style.overflow="";

}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e=>{

    if(e.target===modal){

        closeModal();

    }

});

document.addEventListener("keydown", e=>{

    if(e.key==="Escape"){

        closeModal();

    }

});
/*=========================================================
                VIEW MORE
=========================================================*/

const passportviewMoreBtn = document.getElementById("loadMorePassport");

let visibleCards = 15;
const cardsPerClick = 5;

function updatePassportCards(){

    const cards = document.querySelectorAll(".passport-card");

    cards.forEach((card,index)=>{

        if(index < visibleCards){

            card.style.display="flex";

            requestAnimationFrame(()=>{

                card.classList.add("show-card");

            });

        }

        else{

            card.style.display="none";

            card.classList.remove("show-card");

        }

    });

    if(visibleCards >= cards.length){

        passportviewMoreBtn.style.display="none";

    }

}

updatePassportCards();

passportviewMoreBtn.addEventListener("click",()=>{

    visibleCards += cardsPerClick;

    updatePassportCards();

});

/*=========================================================
SCROLL REVEAL
=========================================================*/

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("reveal");

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".passport-card").forEach(card=>{

    revealObserver.observe(card);

});

const collection = document.querySelector(".passport-collection");

const collectionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            collection.classList.add("show");

            collectionObserver.unobserve(collection);

        }

    });

},{
    threshold:.3
});

collectionObserver.observe(collection);
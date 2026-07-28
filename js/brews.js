const brewGrid = document.querySelector(".brew-grid");

function loadBrews() {

    brewGrid.innerHTML = "";

    brewers
    .filter(brew => brew.id !== "aeropress")
    .forEach((brew) => {

        const recipeCount = brew.recipes.length;

        brewGrid.innerHTML += `

        <div class="brew-journal-card">

            <div class="brew-image">

                <img src="${brew.image}" alt="${brew.name}">

            </div>

            <div class="brew-journal-content">

                <h3>${brew.name}</h3>

                <p class="brew-subtitle">

                    ${recipeCount} Recipe${recipeCount > 1 ? "s" : ""}

                </p>

                <button
                    class="brew-view"
                    data-id="${brew.id}">

                    Browse Recipes →

                </button>

            </div>

        </div>

        `;

    });

    document.querySelectorAll(".brew-view").forEach(button => {

        button.addEventListener("click", () => {

            openRecipeModal(button.dataset.id);

        });

    });

}

loadBrews();
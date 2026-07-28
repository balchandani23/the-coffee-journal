const recipeModal = document.getElementById("recipeModal");
const recipeCloseBtn = document.getElementById("closeRecipe");

const modalBrewerName = document.getElementById("modalBrewerName");
const recipeList = document.getElementById("recipeList");

const recipeTitle = document.getElementById("recipeTitle");
const recipeSpecs = document.getElementById("recipeSpecs");
const recipeSteps = document.getElementById("recipeSteps");
const recipeNotes = document.getElementById("recipeNotes");
const recipeTaste = document.getElementById("recipeTaste");

function openRecipeModal(brewerId) {

    const brewer = brewers.find(b => b.id === brewerId);

    if (!brewer) return;

    recipeModal.classList.add("active");

    modalBrewerName.textContent = brewer.name;

    recipeList.innerHTML = "";

    brewer.recipes.forEach((recipe, index) => {

        const item = document.createElement("div");

        item.className = "recipe-item";

        item.textContent = recipe.title;

        item.addEventListener("click", () => {

            loadRecipe(recipe);

            document.querySelectorAll(".recipe-item").forEach(i => i.classList.remove("active"));

            item.classList.add("active");

        });

        recipeList.appendChild(item);

        if (index === 0) {

            item.classList.add("active");

            loadRecipe(recipe);

        }

    });

}

function loadRecipe(recipe) {

    recipeTitle.textContent = recipe.title;

    recipeSpecs.innerHTML = `
    
        <div class="recipe-spec">
            <span>Coffee</span>
            <strong>${recipe.coffee || "-"}</strong>
        </div>

        <div class="recipe-spec">
            <span>Water</span>
            <strong>${recipe.water || "-"}</strong>
        </div>

        <div class="recipe-spec">
            <span>Ratio</span>
            <strong>${recipe.ratio || "-"}</strong>
        </div>

        <div class="recipe-spec">
            <span>Grind</span>
            <strong>${recipe.grind || "-"}</strong>
        </div>

        <div class="recipe-spec">
            <span>Temperature</span>
            <strong>${recipe.temperature || "-"}</strong>
        </div>

        <div class="recipe-spec">
            <span>Brew Time</span>
            <strong>${recipe.brewTime || "-"}</strong>
        </div>

    `;

    recipeSteps.innerHTML = "";

    if (recipe.steps.length) {

        recipe.steps.forEach(step => {

            recipeSteps.innerHTML += `<li>${step}</li>`;

        });

    } else {

        recipeSteps.innerHTML = "<li>No steps added yet.</li>";

    }

    recipeNotes.textContent = recipe.notes || "No notes added yet.";

    recipeTaste.innerHTML = "";

    if (recipe.taste.length) {

        recipe.taste.forEach(note => {

            recipeTaste.innerHTML += `<span>${note}</span>`;

        });

    } else {

        recipeTaste.innerHTML = "<span>No taste notes yet.</span>";

    }

}

recipeCloseBtn.addEventListener("click", () => {

    recipeModal.classList.remove("active");

});

recipeModal.addEventListener("click", (e) => {

    if (e.target === recipeModal) {

        recipeModal.classList.remove("active");

    }

});

const featuredRecipeBtn = document.getElementById("featuredRecipeBtn");

if (featuredRecipeBtn) {

    featuredRecipeBtn.addEventListener("click", () => {

        openRecipeModal("aeropress");

    });

}
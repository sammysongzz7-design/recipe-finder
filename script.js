// ==============================
// SELECT HTML ELEMENTS
// ==============================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchBtn");

const recipesContainer =
    document.getElementById("recipes");

const loading =
    document.getElementById("loading");

const modal =
    document.getElementById("recipeModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");
 const favouritesContainer =
    document.getElementById("favourites");


// ==============================
// STORE DATA
// ==============================

let meals = [];

let favourites =
    JSON.parse(
        localStorage.getItem("favourites")
    ) || [];


// ==============================
// SEARCH RECIPES
// ==============================

async function searchRecipes() {

    const searchText =
        searchInput.value.trim();


    // Check empty search
    if (searchText === "") {

        recipesContainer.innerHTML = `
            <h2>Please enter a recipe name.</h2>
        `;

        return;
    }


    // Show loading
    loading.style.display = "block";


    // Clear old recipes
    recipesContainer.innerHTML = "";


    try {

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        );


        const data =
            await response.json();


        // Hide loading
        loading.style.display = "none";


        // No recipes
        if (!data.meals) {

            recipesContainer.innerHTML = `
                <h2>No recipes found.</h2>
            `;

            return;
        }


        // Store recipes
        meals = data.meals;


        // Display recipes
        meals.forEach(function (meal) {

            recipesContainer.innerHTML += `

                <div class="recipe-card">

                    <img
                        src="${meal.strMealThumb}"
                        alt="${meal.strMeal}"
                    >

                    <div class="recipe-content">

                        <h2>
                            ${meal.strMeal}
                        </h2>

                        <p>
                            <strong>Category:</strong>
                            ${meal.strCategory}
                        </p>

                        <p>
                            <strong>Cuisine:</strong>
                            ${meal.strArea}
                        </p>


                        <div class="button-group">

                            <button
                                class="view-btn"
                                data-id="${meal.idMeal}">
                                View Recipe
                            </button>


                            <button
                                class="fav-btn"
                                data-id="${meal.idMeal}">
                                ❤️ Favourite
                            </button>

                        </div>

                    </div>

                </div>

            `;

        });


    } catch (error) {

        loading.style.display = "none";

        recipesContainer.innerHTML = `
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
        `;

        console.error(error);

    }

}


// ==============================
// SHOW RECIPE
// ==============================

function showRecipe(meal) {

    let ingredients = "";


    // Get ingredients
    for (
        let i = 1;
        i <= 20;
        i++
    ) {

        const ingredient =
            meal[`strIngredient${i}`];

        const measure =
            meal[`strMeasure${i}`];


        if (
            ingredient &&
            ingredient.trim() !== ""
        ) {

            ingredients += `
                <li>
                    ${measure} ${ingredient}
                </li>
            `;

        }

    }


    // Open modal
    modal.style.display = "flex";


    // Display recipe
    modalBody.innerHTML = `

        <h2>
            ${meal.strMeal}
        </h2>


        <img
            src="${meal.strMealThumb}"
            alt="${meal.strMeal}"
        >


        <p>
            <strong>Category:</strong>
            ${meal.strCategory}
        </p>


        <p>
            <strong>Cuisine:</strong>
            ${meal.strArea}
        </p>


        <h3>
            Ingredients
        </h3>


        <ul>
            ${ingredients}
        </ul>


        <h3>
            Instructions
        </h3>


        <p>
            ${meal.strInstructions}
        </p>

    `;

}


// ==============================
// SAVE FAVOURITE
// ==============================

function saveFavourite(mealId) {

    function displayFavourites() {

    favouritesContainer.innerHTML = "";


    if (favourites.length === 0) {

        favouritesContainer.innerHTML = `
            <p>No favourite recipes yet.</p>
        `;

        return;
    }


    favourites.forEach(function (meal) {

        favouritesContainer.innerHTML += `

            <div class="recipe-card">

                <img
                    src="${meal.strMealThumb}"
                    alt="${meal.strMeal}"
                >

                <div class="recipe-content">

                    <h2>
                        ${meal.strMeal}
                    </h2>

                    <p>
                        <strong>Category:</strong>
                        ${meal.strCategory}
                    </p>

                    <p>
                        <strong>Cuisine:</strong>
                        ${meal.strArea}
                    </p>

                    <div class="button-group">

                        <button
                            class="view-favourite-btn"
                            data-id="${meal.idMeal}">
                            View Recipe
                        </button>

                        <button
                            class="remove-fav-btn"
                            data-id="${meal.idMeal}">
                            Remove ❤️
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}

    const meal =
        meals.find(function (item) {

            return item.idMeal === mealId;

        });


    if (!meal) {

        return;

    }


    // Check if already saved
    const alreadySaved =
        favourites.some(function (item) {

            return item.idMeal === mealId;

        });


    if (alreadySaved) {

        alert(
            "Recipe already in favourites!"
        );

        return;

    }


    // Add recipe
    favourites.push(meal);


    // Save to browser
    localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
    );


    alert("Recipe saved!");

    displayFavourites();

    function removeFavourite(mealId) {

    favourites = favourites.filter(function (meal) {

        return meal.idMeal !== mealId;

    });


    localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
    );


    displayFavourites();

}
}


// ==============================
// SEARCH BUTTON
// ==============================

searchButton.addEventListener(
    "click",
    searchRecipes
);


// ==============================
// ENTER KEY
// ==============================

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchRecipes();

        }

    }
);


// ==============================
// RECIPE BUTTONS
// ==============================

recipesContainer.addEventListener(
    "click",
    function (event) {


        // View Recipe
        if (
            event.target.classList.contains(
                "view-btn"
            )
        ) {

            const mealId =
                event.target.dataset.id;


            const selectedMeal =
                meals.find(function (meal) {

                    return (
                        meal.idMeal === mealId
                    );

                });


            showRecipe(selectedMeal);

        }


        // Favourite
        if (
            event.target.classList.contains(
                "fav-btn"
            )
        ) {

            const mealId =
                event.target.dataset.id;


            saveFavourite(mealId);

        }

    }
);
favouritesContainer.addEventListener(
    "click",
    function (event) {

        const mealId =
            event.target.dataset.id;


        // View favourite
        if (
            event.target.classList.contains(
                "view-favourite-btn"
            )
        ) {

            const selectedMeal =
                favourites.find(function (meal) {

                    return meal.idMeal === mealId;

                });


            showRecipe(selectedMeal);

        }


        // Remove favourite
        if (
            event.target.classList.contains(
                "remove-fav-btn"
            )
        ) {

            removeFavourite(mealId);

        }

    }
);


// ==============================
// CLOSE MODAL
// ==============================

closeModal.addEventListener(
    "click",
    function () {

        modal.style.display = "none";

    }
);


// ==============================
// CLICK OUTSIDE MODAL
// ==============================

window.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    }
);
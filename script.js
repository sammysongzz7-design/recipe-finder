

// ==========================================
// NAIJA BITES - NIGERIAN RECIPE FINDER
// ==========================================


// ==========================================
// WIKIMEDIA COMMONS IMAGE HELPER
// ==========================================

function commonsImage(filename) {

    return (
        "https://commons.wikimedia.org/wiki/" +
        "Special:Redirect/file/" +
        encodeURIComponent(filename)
    );

}


// ==========================================
// DOM ELEMENTS
// ==========================================

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const clearSearchBtn =
    document.getElementById("clearSearchBtn");

const recipesContainer =
    document.getElementById("recipes");

const favouritesContainer =
    document.getElementById("favourites");

const mealPlanner =
    document.getElementById("mealPlanner");

const recipeModal =
    document.getElementById("recipeModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");

const themeBtn =
    document.getElementById("themeBtn");

const loading =
    document.getElementById("loading");

const resultsEyebrow =
    document.getElementById("resultsEyebrow");

const resultsTitle =
    document.getElementById("resultsTitle");

const resultsDescription =
    document.getElementById("resultsDescription");

const recipeCount =
    document.getElementById("recipeCount");

const totalRecipes =
    document.getElementById("totalRecipes");

const totalFavourites =
    document.getElementById("totalFavourites");

const plannedMeals =
    document.getElementById("plannedMeals");

const ingredientInput =
    document.getElementById("ingredientInput");

const addIngredientBtn =
    document.getElementById("addIngredientBtn");

const ingredientTags =
    document.getElementById("ingredientTags");

const findKitchenRecipesBtn =
    document.getElementById("findKitchenRecipesBtn");


// ==========================================
// APPLICATION STATE
// ==========================================

let currentRecipes = [];

let currentMeal = null;

let currentStep = 0;

let currentServings = 2;

let kitchenIngredients = [];


// ==========================================
// LOCAL STORAGE
// ==========================================

let favourites =
    JSON.parse(
        localStorage.getItem("favourites")
    ) || [];

let ratings =
    JSON.parse(
        localStorage.getItem("recipeRatings")
    ) || {};

let mealPlans =
    JSON.parse(
        localStorage.getItem("mealPlans")
    ) || {};




favourites = favourites.map(function (meal) {

    return {
        ...meal,
        id: String(meal.id)
    };

});


localStorage.setItem(
    "favourites",
    JSON.stringify(favourites)
);


// ==========================================
// DAYS / MEAL TYPES
// ==========================================

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner"
];


// ==========================================
// NIGERIAN RECIPE DATABASE
// ==========================================

const nigerianRecipes = [

    // ======================================
    // 1. JOLLOF RICE
    // ======================================

    {
        id: "nigeria-001",

        name: "Jollof Rice",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Nigerian Jollof Rice.jpg"
            ),

        description:
            "A classic Nigerian rice dish cooked in a rich tomato and pepper sauce with aromatic spices.",

        baseServings: 4,

        ingredients: [

            {
                name: "Long grain rice",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Tomatoes",
                quantity: 5,
                unit: "medium"
            },

            {
                name: "Red bell pepper",
                quantity: 2,
                unit: "large"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Vegetable oil",
                quantity: 4,
                unit: "tablespoons"
            },

            {
                name: "Chicken stock",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Curry powder",
                quantity: 1,
                unit: "teaspoon"
            },

            {
                name: "Thyme",
                quantity: 1,
                unit: "teaspoon"
            }, 

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Blend the tomatoes, red bell peppers and one onion until smooth.",

            "Heat vegetable oil in a large pot and sauté the remaining chopped onion.",

            "Add the blended pepper mixture and cook until the sauce thickens and the raw tomato taste reduces.",

            "Add curry powder, thyme, salt and chicken stock.",

            "Wash the rice thoroughly and add it to the sauce.",

            "Cover the pot tightly and cook on low heat until the rice is tender.",

            "Fluff the rice with a fork and serve hot."

        ]

    },


    // ======================================
    // 2. FRIED RICE
    // ======================================

    {
        id: "nigeria-002",

        name: "Nigerian Fried Rice",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Fried rice and chicken garnished with sweet corn, carrot and green peas.jpg"
            ),

        description:
            "Colourful Nigerian fried rice prepared with mixed vegetables, chicken and aromatic spices.",

        baseServings: 4,

        ingredients: [

            {
                name: "Long grain rice",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Carrots",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Green beans",
                quantity: 1,
                unit: "cup"
            },

            {
                name: "Green peas",
                quantity: 1,
                unit: "cup"
            },

            {
                name: "Sweet corn",
                quantity: 1,
                unit: "cup"
            },

            {
                name: "Chicken",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Vegetable oil",
                quantity: 4,
                unit: "tablespoons"
            },

            {
                name: "Curry powder",
                quantity: 1,
                unit: "teaspoon"
            },

            {
                name: "Chicken stock",
                quantity: 2,
                unit: "cups"
            }

        ],

        steps: [

            "Cook the rice in seasoned chicken stock until it is almost tender.",

            "Cook the chicken until tender and cut it into small pieces.",

            "Heat vegetable oil in a large frying pan.",

            "Add the chopped vegetables and stir-fry for several minutes.",

            "Add curry powder and the cooked chicken.",

            "Add the cooked rice and mix everything together.",

            "Stir-fry for a few minutes and serve hot."

        ]

    },


    // ======================================
    // 3. EGUSI SOUP
    // ======================================

    {
        id: "nigeria-003",

        name: "Egusi Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Egusi soup with pounded yam and assorted meats.jpg"
            ),

        description:
            "A rich Nigerian soup made with ground melon seeds, vegetables and seasoned meat.",

        baseServings: 5,

        ingredients: [

            {
                name: "Ground egusi",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Spinach",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Beef",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Stock",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Fresh pepper",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Season the beef and cook it until tender.",

            "Heat palm oil in a pot.",

            "Add blended pepper and onion and cook for several minutes.",

            "Add the ground egusi and stir continuously.",

            "Gradually add stock while stirring.",

            "Add the cooked beef and allow the soup to simmer.",

            "Add washed spinach and cook for a few more minutes.",

            "Serve with pounded yam, eba or another swallow."

        ]

    },


    // ======================================
    // 4. AFANG SOUP
    // ======================================

    {
        id: "nigeria-004",

        name: "Afang Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Afang Soup.jpg"
            ),

        description:
            "A traditional Nigerian vegetable soup made with afang leaves, waterleaf and assorted meat.",

        baseServings: 5,

        ingredients: [

            {
                name: "Afang leaves",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Waterleaf",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Beef",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Periwinkle",
                quantity: 1,
                unit: "cup"
            },

            {
                name: "Crayfish",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Pepper",
                quantity: 3,
                unit: "medium"
            },

            {
                name: "Stock",
                quantity: 2,
                unit: "cups"
            }

        ],

        steps: [

            "Cook the meat with seasoning until tender.",

            "Wash and slice the afang leaves and waterleaf.",

            "Heat palm oil in a large pot.",

            "Add blended pepper and crayfish.",

            "Add the cooked meat and stock.",

            "Add the waterleaf and allow it to cook briefly.",

            "Add the afang leaves and stir thoroughly.",

            "Allow the soup to simmer before serving."

        ]

    },


    // ======================================
    // 5. OGBONO SOUP
    // ======================================

    {
        id: "nigeria-005",

        name: "Ogbono Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Ogbono soup.jpg"
            ),

        description:
            "A hearty Nigerian soup made with ground ogbono seeds, palm oil, meat and vegetables.",

        baseServings: 5,

        ingredients: [

            {
                name: "Ground ogbono",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Beef",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Stock",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Spinach",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Crayfish",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Pepper",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Cook the beef until tender and reserve the stock.",

            "Heat palm oil in a pot.",

            "Add the ground ogbono and stir until smooth.",

            "Gradually add stock while stirring.",

            "Add crayfish, pepper and the cooked meat.",

            "Allow the soup to simmer.",

            "Add chopped spinach and cook briefly.",

            "Serve hot with your preferred swallow."

        ]

    },


    // ======================================
    // 6. OKRA SOUP
    // ======================================

    {
        id: "nigeria-006",

        name: "Okra Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Okra Soup In Northern Nigeria 1.jpg"
            ),

        description:
            "A comforting Nigerian okra soup with fresh okra, meat, seafood and traditional spices.",

        baseServings: 5,

        ingredients: [

            {
                name: "Fresh okra",
                quantity: 4,
                unit: "cups"
            },

            {
                name: "Beef",
                quantity: 400,
                unit: "g"
            },

            {
                name: "Stockfish",
                quantity: 200,
                unit: "g"
            },

            {
                name: "Palm oil",
                quantity: 4,
                unit: "tablespoons"
            },

            {
                name: "Crayfish",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Pepper",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Stock",
                quantity: 2,
                unit: "cups"
            }

        ],

        steps: [

            "Cook the beef and stockfish until tender.",

            "Wash and finely chop the okra.",

            "Heat palm oil in a pot.",

            "Add pepper and crayfish.",

            "Add the meat, stockfish and stock.",

            "Add the chopped okra and stir.",

            "Allow the soup to cook for several minutes while retaining the okra texture.",

            "Serve with eba, amala, pounded yam or another swallow."

        ]

    },


    // ======================================
    // 7. MOI MOI
    // ======================================

    {
        id: "nigeria-007",

        name: "Moi Moi",

        category: "Side Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Moi moi.jpg"
            ),

        description:
            "Soft steamed Nigerian bean pudding made from blended beans, pepper and onions.",

        baseServings: 5,

        ingredients: [

            {
                name: "Black-eyed beans",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Red bell pepper",
                quantity: 1,
                unit: "large"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Vegetable oil",
                quantity: 3,
                unit: "tablespoons"
            },

            {
                name: "Eggs",
                quantity: 2,
                unit: "large"
            },

            {
                name: "Water",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Soak the beans and remove their skins.",

            "Blend the beans with pepper, onion and water.",

            "Pour the mixture into a bowl.",

            "Add oil and salt and mix thoroughly.",

            "Pour the mixture into prepared containers.",

            "Add boiled egg pieces if desired.",

            "Steam until the moi moi is firm and completely cooked.",

            "Allow it to cool slightly before serving."

        ]

    },


    // ======================================
    // 8. AKARA
    // ======================================

    {
        id: "nigeria-008",

        name: "Akara",

        category: "Breakfast",

        area: "Nigeria",

        image:
            commonsImage(
                "AKARA.jpg"
            ),

        description:
            "Crispy Nigerian bean cakes made from blended black-eyed beans and pepper.",

        baseServings: 4,

        ingredients: [

            {
                name: "Black-eyed beans",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Fresh pepper",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Vegetable oil",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Soak the beans and remove their skins.",

            "Blend the beans with onion and pepper.",

            "Transfer the mixture to a bowl.",

            "Add salt and whisk the mixture until light and fluffy.",

            "Heat vegetable oil in a deep frying pan.",

            "Scoop portions of the batter into the hot oil.",

            "Fry until golden brown.",

            "Remove and drain on kitchen paper."

        ]

    },


    // ======================================
    // 9. POUNDED YAM
    // ======================================

    {
        id: "nigeria-009",

        name: "Pounded Yam",

        category: "Swallow",

        area: "Nigeria",

        image:
            commonsImage(
                "Pounded Yam is a staple food among the Tiv people of Benue State in Nigeria.jpg"
            ),

        description:
            "Soft and smooth pounded yam traditionally served with Nigerian soups.",

        baseServings: 4,

        ingredients: [

            {
                name: "Yam",
                quantity: 1,
                unit: "large tuber"
            },

            {
                name: "Water",
                quantity: 6,
                unit: "cups"
            }

        ],

        steps: [

            "Peel the yam and cut it into smaller pieces.",

            "Wash the yam thoroughly.",

            "Place the yam in a pot of water.",

            "Boil until the yam becomes very soft.",

            "Drain most of the water.",

            "Pound the yam until it becomes smooth and stretchy.",

            "Serve hot with your favourite Nigerian soup."

        ]

    },


    // ======================================
    // 10. AMALA
    // ======================================

    {
        id: "nigeria-010",

        name: "Amala",

        category: "Swallow",

        area: "Nigeria",

        image:
            commonsImage(
                "Amala and ewedu.jpg"
            ),

        description:
            "A traditional Nigerian swallow made from yam flour and commonly served with soups.",

        baseServings: 4,

        ingredients: [

            {
                name: "Yam flour",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Water",
                quantity: 5,
                unit: "cups"
            }

        ],

        steps: [

            "Bring water to a boil in a large pot.",

            "Gradually add yam flour while stirring continuously.",

            "Continue stirring to prevent lumps.",

            "Reduce the heat and keep stirring until smooth.",

            "Cover and allow the amala to steam briefly.",

            "Stir again until soft and smooth.",

            "Serve immediately with your favourite soup."

        ]

    },


    // ======================================
    // 11. EWA AGOYIN
    // ======================================

    {
        id: "nigeria-011",

        name: "Ewa Agoyin",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Ewa Aganyin.jpg"
            ),

        description:
            "Soft mashed beans served with a deeply flavoured spicy pepper sauce.",

        baseServings: 4,

        ingredients: [

            {
                name: "Honey beans",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Dried pepper",
                quantity: 5,
                unit: "pieces"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Wash the beans thoroughly.",

            "Boil the beans until they are very soft.",

            "Mash the cooked beans until creamy.",

            "Blend the dried pepper and onions.",

            "Heat palm oil in a separate pot.",

            "Add the pepper mixture and cook slowly.",

            "Season with salt and continue cooking until the sauce is deeply flavoured.",

            "Serve the sauce over the soft beans."

        ]

    },


    // ======================================
    // 12. OFADA RICE
    // ======================================

    {
        id: "nigeria-012",

        name: "Ofada Rice and Sauce",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Ofada Rice.jpg"
            ),

        description:
            "Locally grown Ofada rice paired with a spicy Nigerian pepper sauce.",

        baseServings: 4,

        ingredients: [

            {
                name: "Ofada rice",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Green peppers",
                quantity: 6,
                unit: "large"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Assorted meat",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Locust beans",
                quantity: 1,
                unit: "tablespoon"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Wash and cook the Ofada rice until tender.",

            "Blend the green peppers and onions.",

            "Cook the assorted meat until tender.",

            "Heat palm oil in a pot.",

            "Add the blended pepper mixture.",

            "Add locust beans and seasoning.",

            "Add the cooked meat.",

            "Allow the sauce to simmer and serve with Ofada rice."

        ]

    },


    // ======================================
    // 13. PEPPER SOUP
    // ======================================

    {
        id: "nigeria-013",

        name: "Nigerian Pepper Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Nigerian prepared Pepper-Soup.jpg"
            ),

        description:
            "A spicy Nigerian soup made with meat, pepper soup spices and fresh herbs.",

        baseServings: 4,

        ingredients: [

            {
                name: "Goat meat",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Pepper soup spice",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Fresh pepper",
                quantity: 3,
                unit: "medium"
            },

            {
                name: "Water",
                quantity: 5,
                unit: "cups"
            },

            {
                name: "Scent leaves",
                quantity: 1,
                unit: "cup"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Wash the goat meat and place it in a pot.",

            "Add onion, salt and water.",

            "Cook until the meat becomes tender.",

            "Add pepper soup spice and fresh pepper.",

            "Allow the soup to simmer.",

            "Add chopped scent leaves.",

            "Cook for another few minutes.",

            "Serve hot."

        ]

    },


    // ======================================
    // 14. CHICKEN STEW
    // ======================================

    {
        id: "nigeria-014",

        name: "Nigerian Chicken Stew",

        category: "Stew",

        area: "Nigeria",

        image:
            commonsImage(
                "Fried Chicken stew.jpg"
            ),

        description:
            "Rich Nigerian chicken stew made with tomatoes, peppers, spices and tender chicken.",

        baseServings: 5,

        ingredients: [

            {
                name: "Chicken",
                quantity: 1,
                unit: "kg"
            },

            {
                name: "Tomatoes",
                quantity: 6,
                unit: "medium"
            },

            {
                name: "Red bell peppers",
                quantity: 3,
                unit: "large"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Vegetable oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Curry powder",
                quantity: 1,
                unit: "teaspoon"
            },

            {
                name: "Thyme",
                quantity: 1,
                unit: "teaspoon"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Season and boil the chicken until tender.",

            "Blend the tomatoes, peppers and onions.",

            "Heat vegetable oil in a pot.",

            "Add the blended mixture and cook until reduced.",

            "Add curry powder and thyme.",

            "Add the cooked chicken.",

            "Allow the stew to simmer until thick and rich.",

            "Serve with rice, yam or another side."

        ]

    },


    // ======================================
    // 15. YAM PORRIDGE
    // ======================================

    {
        id: "nigeria-015",

        name: "Yam Porridge",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Asaro Yam porridge.jpg"
            ),

        description:
            "Soft yam cooked in a rich tomato, pepper and palm oil sauce.",

        baseServings: 4,

        ingredients: [

            {
                name: "Yam",
                quantity: 1,
                unit: "large tuber"
            },

            {
                name: "Palm oil",
                quantity: 4,
                unit: "tablespoons"
            },

            {
                name: "Tomatoes",
                quantity: 4,
                unit: "medium"
            },

            {
                name: "Pepper",
                quantity: 3,
                unit: "medium"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Stock",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Peel and cut the yam into small chunks.",

            "Blend the tomatoes, pepper and onion.",

            "Heat palm oil in a pot.",

            "Add the blended mixture and cook briefly.",

            "Add the yam pieces and stock.",

            "Season with salt.",

            "Cover and cook until the yam becomes soft.",

            "Mash a few yam pieces slightly to thicken the sauce."

        ]

    },


    // ======================================
    // 16. BEANS AND PLANTAIN
    // ======================================

    {
        id: "nigeria-016",

        name: "Beans and Plantain",

        category: "Main Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Beans and plantain with stew, fried fish and a cup of garri.jpg"
            ),

        description:
            "A comforting Nigerian meal combining soft beans with sweet fried plantain.",

        baseServings: 4,

        ingredients: [

            {
                name: "Brown beans",
                quantity: 3,
                unit: "cups"
            },

            {
                name: "Ripe plantain",
                quantity: 4,
                unit: "large"
            },

            {
                name: "Palm oil",
                quantity: 3,
                unit: "tablespoons"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "medium"
            },

            {
                name: "Pepper",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Salt",
                quantity: 1,
                unit: "teaspoon"
            },

            {
                name: "Water",
                quantity: 6,
                unit: "cups"
            }

        ],

        steps: [

            "Wash the beans thoroughly.",

            "Boil the beans until soft.",

            "Add chopped onion, pepper and palm oil.",

            "Season with salt and allow the beans to cook.",

            "Peel and slice the ripe plantain.",

            "Heat oil in a frying pan.",

            "Fry the plantain until golden brown.",

            "Serve the fried plantain with the beans."

        ]

    },


    // ======================================
    // 17. SUYA
    // ======================================

    {
        id: "nigeria-017",

        name: "Suya",

        category: "Street Food",

        area: "Nigeria",

        image:
            commonsImage(
                "Suya with pepper sauce.jpg"
            ),

        description:
            "Popular Nigerian spicy grilled beef coated with aromatic suya spice.",

        baseServings: 4,

        ingredients: [

            {
                name: "Beef",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Suya spice",
                quantity: 3,
                unit: "tablespoons"
            },

            {
                name: "Vegetable oil",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Onion",
                quantity: 1,
                unit: "large"
            },

            {
                name: "Tomatoes",
                quantity: 2,
                unit: "medium"
            }

        ],

        steps: [

            "Slice the beef into thin strips.",

            "Coat the beef lightly with vegetable oil.",

            "Generously cover the beef with suya spice.",

            "Thread the beef onto skewers.",

            "Grill the skewers until cooked and slightly charred.",

            "Turn the meat regularly while grilling.",

            "Serve with sliced onions and tomatoes."

        ]

    },


    // ======================================
    // 18. EFO RIRO
    // ======================================

    {
        id: "nigeria-018",

        name: "Efo Riro",

        category: "Soup",

        area: "Nigeria",

        image:
            "images/efo-riro.jpg",

        description:
            "A richly seasoned Nigerian spinach stew prepared with peppers, palm oil and assorted meat.",

        baseServings: 4,

        ingredients: [

            {
                name: "Spinach",
                quantity: 5,
                unit: "cups"
            },

            {
                name: "Red bell pepper",
                quantity: 3,
                unit: "large"
            },

            {
                name: "Tomatoes",
                quantity: 3,
                unit: "medium"
            },

            {
                name: "Palm oil",
                quantity: 5,
                unit: "tablespoons"
            },

            {
                name: "Assorted meat",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Crayfish",
                quantity: 2,
                unit: "tablespoons"
            }

        ],

        steps: [

            "Cook the assorted meat until tender.",

            "Blend the tomatoes, peppers and onions.",

            "Heat palm oil in a pot.",

            "Add the blended pepper mixture and cook until reduced.",

            "Add crayfish and the cooked meat.",

            "Add washed and chopped spinach.",

            "Stir and allow the vegetables to cook briefly.",

            "Serve with your preferred swallow or rice."

        ]

    },


    // ======================================
    // 19. BANGA SOUP
    // ======================================

    {
        id: "nigeria-019",

        name: "Banga Soup",

        category: "Soup",

        area: "Nigeria",

        image:
            commonsImage(
                "Banga Soup.jpg"
            ),

        description:
            "A rich traditional Nigerian palm-fruit soup with assorted meat, fish and aromatic spices.",

        baseServings: 5,

        ingredients: [

            {
                name: "Palm fruit extract",
                quantity: 4,
                unit: "cups"
            },

            {
                name: "Beef",
                quantity: 500,
                unit: "g"
            },

            {
                name: "Stockfish",
                quantity: 200,
                unit: "g"
            },

            {
                name: "Crayfish",
                quantity: 2,
                unit: "tablespoons"
            },

            {
                name: "Onion",
                quantity: 2,
                unit: "medium"
            },

            {
                name: "Pepper",
                quantity: 3,
                unit: "medium"
            },

            {
                name: "Banga spices",
                quantity: 2,
                unit: "tablespoons"
            }

        ],

        steps: [

            "Cook the meat and stockfish until tender.",

            "Prepare the palm fruit extract.",

            "Pour the palm fruit extract into a pot.",

            "Add the cooked meat and stockfish.",

            "Add pepper, crayfish and banga spices.",

            "Allow the soup to simmer until thick and aromatic.",

            "Taste and adjust seasoning.",

            "Serve hot with starch, eba or another preferred side."

        ]

    },


    // ======================================
    // 20. FRIED PLANTAIN
    // ======================================

    {
        id: "nigeria-020",

        name: "Fried Plantain",

        category: "Side Dish",

        area: "Nigeria",

        image:
            commonsImage(
                "Fried plantain.jpg"
            ),

        description:
            "Sweet ripe plantain slices fried until golden and caramelised.",

        baseServings: 4,

        ingredients: [

            {
                name: "Ripe plantain",
                quantity: 4,
                unit: "large"
            },

            {
                name: "Vegetable oil",
                quantity: 2,
                unit: "cups"
            },

            {
                name: "Salt",
                quantity: 0.5,
                unit: "teaspoon"
            }

        ],

        steps: [

            "Peel the ripe plantains.",

            "Slice them evenly.",

            "Sprinkle lightly with salt if desired.",

            "Heat vegetable oil in a frying pan.",

            "Fry the plantain slices until golden brown.",

            "Turn the slices and fry the other side.",

            "Remove and drain on kitchen paper.",

            "Serve as a side dish or snack."

        ]

    }

];


// ==========================================
// INITIALIZE APPLICATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTheme();

        displayFavourites();

        displayMealPlanner();

        updateStats();

        displayRecommendedRecipes();

    }
);


// ==========================================
// RECOMMENDED RECIPES
// ==========================================

function displayRecommendedRecipes() {

    const recommendations =
        shuffleArray(
            [...nigerianRecipes]
        ).slice(
            0,
            12
        );


    currentRecipes =
        recommendations;


    resultsEyebrow.textContent =
        "RECOMMENDED FOR YOU";


    resultsTitle.textContent =
        "Discover Nigerian recipes";


    resultsDescription.textContent =
        "Explore delicious Nigerian dishes and discover your next favourite meal.";


    displayRecipes(
        recommendations
    );

}


// ==========================================
// SEARCH
// ==========================================

function searchRecipes() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        !searchTerm
    ) {

        displayRecommendedRecipes();

        return;

    }


    setLoading(true);


    resultsEyebrow.textContent =
        "SEARCH RESULTS";


    resultsTitle.textContent =
        `Results for "${searchInput.value.trim()}"`;


    resultsDescription.textContent =
        "Nigerian recipes matching your search.";


    try {

        const results =
            searchLocalNigerianRecipes(
                searchTerm
            );


        currentRecipes =
            results;


        displayRecipes(
            results
        );

    }

    catch (error) {

        console.error(error);


        showError(
            "Search failed",
            "Something went wrong. Please try again."
        );

    }

    finally {

        setLoading(false);

    }

}


// ==========================================
// LOCAL SEARCH
// ==========================================

function searchLocalNigerianRecipes(
    searchTerm
) {

    const term =
        searchTerm
            .trim()
            .toLowerCase();


    return nigerianRecipes.filter(
        function (recipe) {

            const matchesName =
                recipe.name
                    .toLowerCase()
                    .includes(term);


            const matchesCategory =
                recipe.category
                    .toLowerCase()
                    .includes(term);


            const matchesArea =
                recipe.area
                    .toLowerCase()
                    .includes(term);


            const matchesDescription =
                recipe.description
                    .toLowerCase()
                    .includes(term);


            const matchesIngredient =
                recipe.ingredients.some(
                    function (ingredient) {

                        return ingredient.name
                            .toLowerCase()
                            .includes(term);

                    }
                );


            return (
                matchesName ||
                matchesCategory ||
                matchesArea ||
                matchesDescription ||
                matchesIngredient
            );

        }
    );

}


// ==========================================
// SEARCH EVENTS
// ==========================================

searchBtn.addEventListener(
    "click",
    searchRecipes
);


searchInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            searchRecipes();

        }

    }
);


clearSearchBtn.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        displayRecommendedRecipes();

    }
);


// ==========================================
// DISPLAY RECIPES
// ==========================================

function displayRecipes(
    meals
) {

    currentRecipes =
        meals;


    recipeCount.textContent =
        `${meals.length} recipe${meals.length !== 1 ? "s" : ""}`;


    totalRecipes.textContent =
        meals.length;


    if (
        meals.length === 0
    ) {

        recipesContainer.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🍳
                </div>

                <h3>
                    No Nigerian recipes found
                </h3>

                <p>
                    Try another dish, ingredient or category.
                </p>

            </div>

        `;

        return;

    }


    recipesContainer.innerHTML =
        meals
            .map(
                function (meal) {

                    return createRecipeCard(
                        meal,
                        false
                    );

                }
            )
            .join("");

}


// ==========================================
// CREATE RECIPE CARD
// ==========================================

function createRecipeCard(
    meal,
    isFavouriteSection = false
) {

    const mealId =
        String(meal.id);


    const isFavourite =
        favourites.some(
            function (item) {

                return (
                    String(item.id) ===
                    mealId
                );

            }
        );


    const rating =
        ratings[mealId] || 0;


    let actionButtons;


    // ======================================
    // MAIN RECIPE SECTION
    // ======================================

    if (
        !isFavouriteSection
    ) {

        actionButtons = `

            <button
                class="view-btn"
                data-id="${mealId}">

                View Recipe

            </button>


            <button
                class="fav-btn ${isFavourite ? "saved" : ""}"
                data-id="${mealId}">

                ${
                    isFavourite
                        ? "❤️ Saved"
                        : "♡ Favourite"
                }

            </button>


            <button
                class="plan-btn"
                data-id="${mealId}">

                📅 Add to Plan

            </button>

        `;

    }


    // ======================================
    // FAVOURITES SECTION
    // ======================================

    else {

        actionButtons = `

            <button
                class="view-btn"
                data-id="${mealId}">

                View Recipe

            </button>


            <button
                class="delete-fav-btn delete-btn"
                data-id="${mealId}">

                🗑 Delete

            </button>


            <button
                class="plan-btn"
                data-id="${mealId}">

                📅 Add to Plan

            </button>

        `;

    }


    return `

        <article class="recipe-card">

            <div class="card-image-wrapper">

                <img
                    src="${meal.image}"
                    alt="${escapeHTML(meal.name)}"
                    loading="lazy"
                >

                <span class="category-badge">
                    ${escapeHTML(
                        meal.category
                    )}
                </span>

            </div>


            <div class="recipe-content">

                <h3>
                    ${escapeHTML(
                        meal.name
                    )}
                </h3>


                <div class="recipe-meta">

                    <span>
                        🇳🇬 Nigeria
                    </span>

                    <span>
                        ${escapeHTML(
                            meal.category
                        )}
                    </span>

                </div>


                <div class="card-rating">
                    ${getStars(rating)}
                </div>


                <p class="recipe-description">
                    ${escapeHTML(
                        meal.description
                    )}
                </p>


                <div class="button-group">

                    ${actionButtons}

                </div>

            </div>

        </article>

    `;

}


// ==========================================
// MAIN RECIPE CARD EVENTS
// ==========================================

recipesContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        const mealId =
            String(
                button.dataset.id || ""
            );


        if (!mealId) {
            return;
        }


        const meal =
            currentRecipes.find(
                function (item) {

                    return (
                        String(item.id) ===
                        mealId
                    );

                }
            );


        if (!meal) {
            return;
        }


        if (
            button.classList.contains(
                "view-btn"
            )
        ) {

            openRecipe(meal);

            return;

        }


        if (
            button.classList.contains(
                "fav-btn"
            )
        ) {

            toggleFavourite(meal);

            return;

        }


        if (
            button.classList.contains(
                "plan-btn"
            )
        ) {

            openMealPlanner(meal);

            return;

        }

    }
);


// ==========================================
// OPEN RECIPE
// ==========================================

function openRecipe(
    meal
) {

    currentMeal =
        meal;


    currentStep = 0;


    currentServings =
        meal.baseServings || 2;


    recipeModal.classList.add(
        "active"
    );


    renderRecipeModal();

}


// ==========================================
// RENDER RECIPE MODAL
// ==========================================

function renderRecipeModal() {

    if (
        !currentMeal
    ) {

        return;

    }


    const meal =
        currentMeal;


    const baseServings =
        meal.baseServings || 2;


    const scale =
        currentServings /
        baseServings;


    const ingredients =
        meal.ingredients
            .map(
                function (ingredient) {

                    let displayQuantity =
                        ingredient.quantity;


                    if (
                        typeof ingredient.quantity ===
                        "number"
                    ) {

                        displayQuantity =
                            formatQuantity(
                                ingredient.quantity *
                                scale
                            );

                    }


                    return `

                        <li>

                            <strong>
                                ${escapeHTML(
                                    String(
                                        displayQuantity
                                    )
                                )}
                            </strong>

                            ${escapeHTML(
                                ingredient.unit ||
                                ""
                            )}

                            ${escapeHTML(
                                ingredient.name
                            )}

                        </li>

                    `;

                }
            )
            .join("");


    modalBody.innerHTML = `

        <img
            class="modal-image"
            src="${meal.image}"
            alt="${escapeHTML(meal.name)}"
        >


        <h2 class="modal-title">
            ${escapeHTML(meal.name)}
        </h2>


        <p class="modal-description">
            ${escapeHTML(meal.description)}
        </p>


        <div class="modal-meta">

            <span>
                🇳🇬 Nigeria
            </span>

            <span>
                🍴 ${escapeHTML(
                    meal.category
                )}
            </span>

            <span>
                🍽️ ${currentServings} servings
            </span>

        </div>


        <div class="servings-box">

            <strong>
                🍽️ Servings
            </strong>


            <div class="servings-controls">

                <button
                    id="decreaseServings">

                    −

                </button>


                <strong>
                    ${currentServings}
                </strong>


                <button
                    id="increaseServings">

                    +

                </button>

            </div>

        </div>


        <h3>
            Ingredients
        </h3>


        <ul class="ingredients-list">

            ${ingredients}

        </ul>


        <div class="cooking-mode">

            <div class="cooking-top">

                <h3>
                    👨🏾‍🍳 Cooking Mode
                </h3>


                <span
                    id="stepNumber"
                    class="cooking-step">
                </span>

            </div>


            <div class="cooking-progress">

                <div
                    id="progressBar"
                    class="cooking-progress-bar">
                </div>

            </div>


            <p
                id="stepText"
                class="step-text">
            </p>


            <div class="cooking-controls">

                <button
                    id="previousStep">

                    ← Previous

                </button>


                <button
                    id="nextStep">

                    Next →

                </button>

            </div>

        </div>


        <div class="rating-section">

            <h3>
                ⭐ Rate this recipe
            </h3>


            <p>
                Your rating is saved on this device.
            </p>


            <div class="rating-stars">

                ${createRatingButtons(
                    meal.id
                )}

            </div>

        </div>

    `;


    bindModalControls();

    updateCookingStep();

}


// ==========================================
// CREATE RATING BUTTONS
// ==========================================

function createRatingButtons(
    mealId
) {

    const id =
        String(mealId);


    const currentRating =
        ratings[id] || 0;


    return [1, 2, 3, 4, 5]
        .map(
            function (number) {

                const active =
                    currentRating >= number
                        ? "active"
                        : "";


                return `

                    <button
                        class="rating-star ${active}"
                        data-rating="${number}">

                        ★

                    </button>

                `;

            }
        )
        .join("");

}


// ==========================================
// MODAL CONTROLS
// ==========================================

function bindModalControls() {

    const decreaseBtn =
        document.getElementById(
            "decreaseServings"
        );


    const increaseBtn =
        document.getElementById(
            "increaseServings"
        );


    const previousBtn =
        document.getElementById(
            "previousStep"
        );


    const nextBtn =
        document.getElementById(
            "nextStep"
        );


    if (decreaseBtn) {

        decreaseBtn.addEventListener(
            "click",
            function () {

                if (
                    currentServings > 1
                ) {

                    currentServings--;

                    renderRecipeModal();

                }

            }
        );

    }


    if (increaseBtn) {

        increaseBtn.addEventListener(
            "click",
            function () {

                currentServings++;

                renderRecipeModal();

            }
        );

    }


    if (previousBtn) {

        previousBtn.addEventListener(
            "click",
            function () {

                if (
                    currentStep > 0
                ) {

                    currentStep--;

                    updateCookingStep();

                }

            }
        );

    }


    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                if (
                    currentStep <
                    currentMeal.steps.length - 1
                ) {

                    currentStep++;

                    updateCookingStep();

                }

            }
        );

    }


    document
        .querySelectorAll(
            ".rating-star"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const rating =
                            Number(
                                button.dataset.rating
                            );


                        const mealId =
                            String(
                                currentMeal.id
                            );


                        ratings[mealId] =
                            rating;


                        localStorage.setItem(
                            "recipeRatings",
                            JSON.stringify(
                                ratings
                            )
                        );


                        renderRecipeModal();


                        displayRecipes(
                            currentRecipes
                        );


                        displayFavourites();

                    }
                );

            }
        );

}


// ==========================================
// COOKING MODE
// ==========================================

function updateCookingStep() {

    if (
        !currentMeal ||
        !currentMeal.steps ||
        currentMeal.steps.length === 0
    ) {

        return;

    }


    const stepNumber =
        document.getElementById(
            "stepNumber"
        );


    const stepText =
        document.getElementById(
            "stepText"
        );


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const previousButton =
        document.getElementById(
            "previousStep"
        );


    const nextButton =
        document.getElementById(
            "nextStep"
        );


    stepNumber.textContent =
        `STEP ${currentStep + 1} OF ${currentMeal.steps.length}`;


    stepText.textContent =
        currentMeal.steps[
            currentStep
        ];


    const progress =
        (
            (currentStep + 1) /
            currentMeal.steps.length
        ) * 100;


    progressBar.style.width =
        `${progress}%`;


    previousButton.disabled =
        currentStep === 0;


    nextButton.textContent =
        currentStep ===
        currentMeal.steps.length - 1

            ? "✓ Finished"

            : "Next →";

}


// ==========================================
// TOGGLE FAVOURITE
// ==========================================

function toggleFavourite(
    meal
) {

    const mealId =
        String(meal.id);


    const existingIndex =
        favourites.findIndex(
            function (item) {

                return (
                    String(item.id) ===
                    mealId
                );

            }
        );


    if (
        existingIndex !== -1
    ) {

        favourites.splice(
            existingIndex,
            1
        );

    } else {

        favourites.push({
            ...meal,
            id: mealId
        });

    }


    localStorage.setItem(
        "favourites",
        JSON.stringify(
            favourites
        )
    );


    displayRecipes(
        currentRecipes
    );


    displayFavourites();

    updateStats();

}


// ==========================================
// DELETE FAVOURITE
// ==========================================

function deleteFavourite(
    mealId
) {

    const id =
        String(mealId);


    favourites =
        favourites.filter(
            function (meal) {

                return (
                    String(meal.id) !==
                    id
                );

            }
        );


    localStorage.setItem(
        "favourites",
        JSON.stringify(
            favourites
        )
    );


    displayFavourites();


    displayRecipes(
        currentRecipes
    );


    updateStats();

}


// ==========================================
// DISPLAY FAVOURITES
// ==========================================

function displayFavourites() {

    totalFavourites.textContent =
        favourites.length;


    if (
        favourites.length === 0
    ) {

        favouritesContainer.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    ❤️
                </div>

                <h3>
                    No favourites yet
                </h3>

                <p>
                    Save recipes you love and they'll appear here.
                </p>

            </div>

        `;

        return;

    }


    favouritesContainer.innerHTML =
        favourites
            .map(
                function (meal) {

                    return createRecipeCard(
                        meal,
                        true
                    );

                }
            )
            .join("");

}


// ==========================================
// FAVOURITES EVENTS
// ==========================================

favouritesContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        const mealId =
            String(
                button.dataset.id || ""
            );


        if (!mealId) {
            return;
        }


        // ----------------------------------
        // DELETE
        // ----------------------------------

        if (
            button.classList.contains(
                "delete-fav-btn"
            )
        ) {

            deleteFavourite(
                mealId
            );

            return;

        }


        // ----------------------------------
        // FIND SAVED RECIPE
        // ----------------------------------

        const meal =
            favourites.find(
                function (item) {

                    return (
                        String(item.id) ===
                        mealId
                    );

                }
            );


        if (!meal) {

            console.warn(
                "Saved recipe not found:",
                mealId
            );

            return;

        }


        // ----------------------------------
        // VIEW
        // ----------------------------------

        if (
            button.classList.contains(
                "view-btn"
            )
        ) {

            openRecipe(
                meal
            );

            return;

        }


        // ----------------------------------
        // MEAL PLAN
        // ----------------------------------

        if (
            button.classList.contains(
                "plan-btn"
            )
        ) {

            openMealPlanner(
                meal
            );

            return;

        }

    }
);


// ==========================================
// WHAT'S IN MY KITCHEN
// ==========================================

addIngredientBtn.addEventListener(
    "click",
    addKitchenIngredient
);


ingredientInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            addKitchenIngredient();

        }

    }
);


function addKitchenIngredient() {

    const ingredient =
        ingredientInput.value
            .trim()
            .toLowerCase();


    if (
        !ingredient ||
        kitchenIngredients.includes(
            ingredient
        )
    ) {

        ingredientInput.value =
            "";

        return;

    }


    kitchenIngredients.push(
        ingredient
    );


    ingredientInput.value =
        "";


    renderIngredientTags();

}


function renderIngredientTags() {

    ingredientTags.innerHTML =
        kitchenIngredients
            .map(
                function (
                    ingredient,
                    index
                ) {

                    return `

                        <span
                            class="ingredient-tag">

                            ${escapeHTML(
                                ingredient
                            )}

                            <button
                                class="remove-ingredient"
                                data-index="${index}">

                                ×

                            </button>

                        </span>

                    `;

                }
            )
            .join("");

}


ingredientTags.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".remove-ingredient"
            );


        if (!button) {
            return;
        }


        const index =
            Number(
                button.dataset.index
            );


        kitchenIngredients.splice(
            index,
            1
        );


        renderIngredientTags();

    }
);


// ==========================================
// FIND RECIPES FROM KITCHEN
// ==========================================

findKitchenRecipesBtn.addEventListener(
    "click",
    findKitchenRecipes
);


function findKitchenRecipes() {

    if (
        kitchenIngredients.length === 0
    ) {

        showKitchenMessage();

        return;

    }


    resultsEyebrow.textContent =
        "YOUR KITCHEN";


    resultsTitle.textContent =
        "Recipes you can make";


    resultsDescription.textContent =
        "Recipes containing one or more of the ingredients you selected.";


    const matches =
        nigerianRecipes
            .map(
                function (recipe) {

                    const matchedIngredients =
                        recipe.ingredients.filter(
                            function (ingredient) {

                                return kitchenIngredients.some(
                                    function (
                                        kitchenIngredient
                                    ) {

                                        return ingredient.name
                                            .toLowerCase()
                                            .includes(
                                                kitchenIngredient
                                            );

                                    }
                                );

                            }
                        );


                    return {

                        recipe,

                        matchedCount:
                            matchedIngredients.length

                    };

                }
            )
            .filter(
                function (item) {

                    return (
                        item.matchedCount > 0
                    );

                }
            )
            .sort(
                function (a, b) {

                    return (
                        b.matchedCount -
                        a.matchedCount
                    );

                }
            )
            .map(
                function (item) {

                    return item.recipe;

                }
            );


    currentRecipes =
        matches;


    displayRecipes(
        matches
    );

}


function showKitchenMessage() {

    recipesContainer.innerHTML = `

        <div class="empty-state">

            <div class="empty-state-icon">
                🧂
            </div>

            <h3>
                Add some ingredients first
            </h3>

            <p>
                Enter ingredients you have in your kitchen.
            </p>

        </div>

    `;

}


// ==========================================
// MEAL PLANNER
// ==========================================

function openMealPlanner(
    meal
) {

    currentMeal =
        meal;


    recipeModal.classList.add(
        "active"
    );


    modalBody.innerHTML = `

        <h2 class="modal-title">
            📅 Add to Meal Plan
        </h2>


        <p class="modal-description">

            Choose when you'd like to eat
            <strong>
                ${escapeHTML(
                    meal.name
                )}
            </strong>.

        </p>


        <div class="planner-form">

            <label for="plannerDay">
                Day
            </label>


            <select id="plannerDay">

                ${days
                    .map(
                        function (day) {

                            return `

                                <option
                                    value="${day}">

                                    ${day}

                                </option>

                            `;

                        }
                    )
                    .join("")}

            </select>


            <label for="plannerMeal">
                Meal
            </label>


            <select id="plannerMeal">

                ${mealTypes
                    .map(
                        function (type) {

                            return `

                                <option
                                    value="${type}">

                                    ${type}

                                </option>

                            `;

                        }
                    )
                    .join("")}

            </select>


            <button
                id="saveMealPlan"
                class="planner-save-btn">

                Add to meal plan

            </button>

        </div>

    `;


    document
        .getElementById(
            "saveMealPlan"
        )
        .addEventListener(
            "click",
            saveMealPlan
        );

}


function saveMealPlan() {

    const day =
        document
            .getElementById(
                "plannerDay"
            )
            .value;


    const mealType =
        document
            .getElementById(
                "plannerMeal"
            )
            .value;


    if (
        !mealPlans[day]
    ) {

        mealPlans[day] = {};

    }


    mealPlans[day][mealType] =
        {
            ...currentMeal,
            id: String(
                currentMeal.id
            )
        };


    localStorage.setItem(
        "mealPlans",
        JSON.stringify(
            mealPlans
        )
    );


    displayMealPlanner();

    updateStats();

    closeRecipeModal();

}


// ==========================================
// DISPLAY MEAL PLANNER
// ==========================================

function displayMealPlanner() {

    mealPlanner.innerHTML =
        days
            .map(
                function (day) {

                    const dayPlan =
                        mealPlans[day] || {};


                    return `

                        <div class="day-card">

                            <h3>
                                ${day}
                            </h3>


                            ${mealTypes
                                .map(
                                    function (
                                        mealType
                                    ) {

                                        const meal =
                                            dayPlan[
                                                mealType
                                            ];


                                        if (
                                            !meal
                                        ) {

                                            return `

                                                <div
                                                    class="meal-slot">

                                                    <strong>
                                                        ${mealType}
                                                    </strong>

                                                    <span
                                                        class="empty-meal">

                                                        No recipe planned

                                                    </span>

                                                </div>

                                            `;

                                        }


                                        return `

                                            <div
                                                class="meal-slot">

                                                <strong>
                                                    ${mealType}
                                                </strong>

                                                ${escapeHTML(
                                                    meal.name
                                                )}

                                                <button
                                                    class="remove-meal-btn"
                                                    data-day="${day}"
                                                    data-meal="${mealType}">

                                                    Remove

                                                </button>

                                            </div>

                                        `;

                                    }
                                )
                                .join("")}

                        </div>

                    `;

                }
            )
            .join("");


    updateStats();

}


// ==========================================
// REMOVE PLANNED MEAL
// ==========================================

mealPlanner.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".remove-meal-btn"
            );


        if (!button) {
            return;
        }


        const day =
            button.dataset.day;


        const mealType =
            button.dataset.meal;


        if (
            mealPlans[day]
        ) {

            delete mealPlans[
                day
            ][
                mealType
            ];

        }


        localStorage.setItem(
            "mealPlans",
            JSON.stringify(
                mealPlans
            )
        );


        displayMealPlanner();

        updateStats();

    }
);


// ==========================================
// DARK MODE
// ==========================================

themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        localStorage.setItem(
            "darkMode",
            isDark
        );


        themeBtn.textContent =
            isDark
                ? "☀️"
                : "🌙";

    }
);


function loadTheme() {

    const isDark =
        localStorage.getItem(
            "darkMode"
        ) === "true";


    if (
        isDark
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        themeBtn.textContent =
            "☀️";

    }

}


// ==========================================
// UPDATE STATISTICS
// ==========================================

function updateStats() {

    totalFavourites.textContent =
        favourites.length;


    let plannedCount = 0;


    Object.values(
        mealPlans
    ).forEach(
        function (day) {

            plannedCount +=
                Object.keys(
                    day
                ).length;

        }
    );


    plannedMeals.textContent =
        plannedCount;


    totalRecipes.textContent =
        currentRecipes.length;

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeRecipeModal() {

    recipeModal.classList.remove(
        "active"
    );


    modalBody.innerHTML =
        "";


    currentMeal =
        null;


    currentStep =
        0;

}


closeModal.addEventListener(
    "click",
    closeRecipeModal
);


window.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            recipeModal
        ) {

            closeRecipeModal();

        }

    }
);


window.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeRecipeModal();

        }

    }
);


// ==========================================
// LOADING
// ==========================================

function setLoading(
    isLoading
) {

    loading.style.display =
        isLoading
            ? "block"
            : "none";

}


// ==========================================
// ERROR STATE
// ==========================================

function showError(
    title,
    message
) {

    recipeCount.textContent =
        "Error";


    recipesContainer.innerHTML = `

        <div class="empty-state">

            <div class="empty-state-icon">
                ⚠️
            </div>

            <h3>
                ${escapeHTML(title)}
            </h3>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

    `;

}


// ==========================================
// STARS
// ==========================================

function getStars(
    rating
) {

    let stars = "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        stars +=
            i <= rating
                ? "★"
                : "☆";

    }


    return stars;

}


// ==========================================
// FORMAT QUANTITY
// ==========================================

function formatQuantity(
    number
) {

    if (
        Number.isInteger(
            number
        )
    ) {

        return number;

    }


    return Number(
        number.toFixed(2)
    );

}


// ==========================================
// SHUFFLE
// ==========================================

function shuffleArray(
    array
) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}
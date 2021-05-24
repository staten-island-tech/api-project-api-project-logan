import { DOMSelectors } from "./DOM";

const key = "4553a2a9652947a58958783303dcd88b";
const key2 = "9df04583a2fe49a9a49d4112be770bd8";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bread, cheese&number=2&apiKey=${key2}&ranking=2`
    ); //fetch is searching for ingredients "bread, cheese"
    const data = await response.json();
    // console.log(data);
    data.forEach((recipe) => {
      //grid is the name of your section tag
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe-card">
        <div class="recipe-card-front">
          <div class="food-title">${recipe.title} </div>
          <img
            src="${recipe.image}"
            alt=""
            class="food-pic"
          />
        </div>
        <div class="recipe-card-back">
        
          
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("something is wrong");
  }
};

query();

const listCreator = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bread, cheese&number=2&apiKey=${key2}&ranking=2`
    );
    const data = await response.json();

    data.forEach((ingredient) => {
      let iteratorValue = 0;
      const used = ingredient.usedIngredients;

      const i = function ingredientIterator() {
        if (ingredient.usedIngredientCount >= iteratorValue) {
          iteratorValue + 1;
          const newIngredient = document.createElement("li");
          const newIngredientName = document.createTextNode(
            "insert_ingredient_name"
          );
          newIngredient.appendChild(newIngredientName);
          console.log(iteratorValue);
          ingredientIterator();
        } else {
          console.log("done");
        }
      };

      const ingredientList = used.forEach(() => {
        //append to the create li
        //  console.log("working");
      });

      //if ingredient count is above 0, then minus one, create an li, edit html of the li, forEach
      // do the same for missedIngredient Count as well
      //the editted html should be of the ingredient name

      //console.log(missing);
      //const missing = ingredient.missedIngredientCount;
    });
  } catch (error) {
    console.log(error);
    alert("something is wrong");
  }
};

listCreator();

//maybe organize using data[0]?

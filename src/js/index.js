import { DOMSelectors } from "./DOM";

const key = "4553a2a9652947a58958783303dcd88b";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bread, cheese&apiKey=4553a2a9652947a58958783303dcd88b&ranking=2`
    ); //fetch is searching for ingredients "bread, cheese"
    const data = await response.json();
    console.log(data);
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
  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bread, cheese&apiKey=4553a2a9652947a58958783303dcd88b&ranking=2`
  );
  const data = await response.json();

  data.forEach((ingredient) => {
    const used = ingredient.usedIngredients;
    const ingredientList = used.forEach(() => {
      const newIngredient = document.createElement("li");
      const newIngredientName = document.createTextNode("name");
      console.log("working");
    });

    /*     if (used > 0) {
      used - 1;
      console.log("subtraced!");
      const newIngredient = document.createElement("li");
      const newIngredientName = document.createTextNode("name");
      newIngredient.appendChild(newIngredientName);
      console.log("stuff created");
    } */

    //if ingredient count is above 0, then minus one, create an li, edit html of the li, forEach
    // do the same for missedIngredient Count as well
    //the editted html should be of the ingredient name

    //console.log(missing);
    //const missing = ingredient.missedIngredientCount;
  });
};

listCreator();

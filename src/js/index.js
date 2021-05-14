import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

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
        </div>

        <div class="recipe-card-back">
        <li> fig preserves</li>  //create an li based on the amount of missing/used
        // new forEach for teh ingredients list?
        //add data on calories?

        <li>baguette</li>
        <li>cream cheese</li>

          </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("something is wrong");
  }
};

query();

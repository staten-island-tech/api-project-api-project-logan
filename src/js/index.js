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
    /*data.forEach((recipe) =>{ //grid is the name of your section tag
        DOMSelectors.grid.insertAdjacentHTML('beforeend', `COPY OVER YOUR HTML`)
    })*/
  } catch (error) {
    console.log(error);
    alert("something is wrong");
  }
};

query();

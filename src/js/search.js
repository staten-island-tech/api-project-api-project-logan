import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bread,cheese&apiKey=4553a2a9652947a58958783303dcd88b&ranking=2&language=en-US&query=${searchParams}`
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
                      class="food-pic"/>
                  </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("something is wrong");
      }
    };
    searchQuery();
  });
};

listen();

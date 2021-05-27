import { DOMSelectors } from "./DOM";

const key = "4553a2a9652947a58958783303dcd88b";
const key2 = "9df04583a2fe49a9a49d4112be770bd8";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchParams}&number=2&apiKey=${key2}&ranking=2`
        ); //fetch is searching for ingredients "bread, cheese"
        const data = await response.json();
        //console.log(data);
        data.forEach((recipe) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            ` <div class="recipe-card">
                  <div class="recipe-card-front">
                    <div class="food-title">${recipe.title} </div>
                    <img
                      src="${recipe.image}"
                      alt=""
                      class="food-pic"/>
                    </div>
                  </div>
              </div>
      </a>
      </div>
      </section>`
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

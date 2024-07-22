import { REACT_APP_SPOONACULAR_API } from "@env";

async function processServerResopnse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

async function getRecipe(ingredients) {
  return fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_SPOONACULAR_API}&ingredients=${ingredients}&number=20`
  ).then(processServerResopnse);
}

const getRecipeInfo = (id) => {
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API}`
  ).then(processServerResopnse);
};

const getRecipeBulk = (ids) => {
  return fetch(
    `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${REACT_APP_SPOONACULAR_API}`
  ).then(processServerResopnse);
};

export { getRecipe, getRecipeInfo, getRecipeBulk };

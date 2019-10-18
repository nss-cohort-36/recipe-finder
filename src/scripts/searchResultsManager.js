// function to build structure that will display on the page
// recipe is the parameter(taco)
const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`
// recipe.title, recipe.image_url, recipe.source_url are parameter pulled plus the structure from the object returned from the fetch

// fucntion to use the code above to send to dom
const displayRecipeHtml = allRecipes => {
  // empty string to start with
  let recipeResultsHtml = ""
  // param then forEach to replace for loop to get through object
  allRecipes.forEach(recipe => {
    // declaring recipeHtml equal to buildRecipeHtml(recipe) - in essence calling abov e code to build dom info
    let recipeHtml = buildRecipeHtml(recipe)
    recipeResultsHtml += recipeHtml
  });
// targeting class from searchFormManager.js to select where info will display on dom
  const searchResultsSection = document.querySelector(".search-results")
  // converting above data into html code 
  searchResultsSection.innerHTML = recipeResultsHtml
}

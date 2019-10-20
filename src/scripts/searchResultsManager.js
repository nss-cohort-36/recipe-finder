// Function definition that adds a HTML string to the DOM. recipe is an argument.
const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`

// Function definition that takes allRecipes (response.recipes) as an argument. 
const displayRecipeHtml = allRecipes => {

  // Declare recipeResultsHtml as an empty string.
  let recipeResultsHtml = ""

  // .forEach loop loops through allRecipes (response.recipes) array.
  allRecipes.forEach(recipe => {

    // Variable recipeHtml is assigned to the value returned from calling the function buildRecipeHtml.
    let recipeHtml = buildRecipeHtml(recipe)

    // recipeHtml is added to the existing value of recipeResultsHtml.
    recipeResultsHtml += recipeHtml
  });

  // The DOM is searched for the first class named .search-results and assigns it to a variable.
  const searchResultsSection = document.querySelector(".search-results")

  // The innerHTML (area between tageted HTML tags) of the searchResultsSection is populated with the value of recipeResultsHtml.
  searchResultsSection.innerHTML = recipeResultsHtml
}

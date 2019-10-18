
//creates function that builds and returns html for recipe search

const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`

//creates function that takes allRecipes as parameter, set an empty string, applies forEach method to allRecipes, recipe is assigned the value of each iteration of allRecipes, assigns recipeHtml the value of buildRecipeHtml with the recipe parameter, and then accumulates the value of recipeHTml to recipeResultsHTml. It then creates a reference to .search-results and uses the .innterHTML method to assign it to that reference. 

const displayRecipeHtml = allRecipes => {
  let recipeResultsHtml = ""
  allRecipes.forEach(recipe => {
    let recipeHtml = buildRecipeHtml(recipe)
    recipeResultsHtml += recipeHtml
  });

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = recipeResultsHtml
}

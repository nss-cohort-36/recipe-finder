//creates function that event as a parameter and declares and sets inputField to reference input element


const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

//calls searchRecipes with the argument inputField.value and .then calls displayRecipeHTML with response.recipes as argument

  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}

//creates functions that adds event listener by assigning reference to search-button and then applying the method to searchButton with takes click and handleSearch function as arguments

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}

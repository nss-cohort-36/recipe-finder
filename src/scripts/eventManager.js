
// 
const handleSearch = event => {
  // console.log(event)
  // Searching the DOM for the first input tag (which gets added to the DOM when the buildAndAppendSearchForm() function runs) and assigning it to variable "inputField"
  const inputField = document.querySelector("input")

  // Logs string "user input" to the console along with what was typed in the input field.
  console.log("user input", inputField.value)

  // 
  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}

// Anonymous function assigned to variable "attachEventListenerToSearchButton". 
const attachEventListenerToSearchButton = () => {

  // DOM is searched for first id named "search-button" ans assigns it to variable "searchButton"
  const searchButton = document.getElementById("search-button")

  // Listens for a click on the "searchButton" element. When clicked, the function "handleSearch" is executed. Can't put parentheses after function name because it would immediately invoke it.
  searchButton.addEventListener("click", handleSearch)
}

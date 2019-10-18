// function to 1st target the input box user types in, and then do an action with it
const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

  // searchRecipes function defined on apiManagerjs and called here - which is where the 2nd .then turning json data into javascript data is completed
  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)
    // response is the parameter of the function and recipes is the name of the object returned from json api

    // displayRecipeHtml called here and defined on searchResultsManager.js - this call sends to dom to display on page
    displayRecipeHtml(response.recipes)
    // final step of called function empties input field on dom to empty string for next input
    inputField.value = ""
  })
}
// click event on button - handleSearch is above function telling what to do going from the event
const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
